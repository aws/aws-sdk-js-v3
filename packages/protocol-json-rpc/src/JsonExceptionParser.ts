import {Member, HttpResponse, BodyParser, ServiceException, Structure, HeaderBag, ResolvedHttpResponse, OperationModel} from '@aws/types';
import {extractMetadata} from '@aws/response-metadata-extractor';
import {
    initServiceException,
    ServiceExceptionOption
} from '@aws/util-exceptions';

export function throwException(
    operation: OperationModel,
    input: ResolvedHttpResponse,
    errorBodyParser: BodyParser,
): Promise<never> {
    const {body} = input;
    const {errors} = operation;
    const errorCodeFieldNameList = [
        '__type', //default field name
        'code', //currently only Glacier uses this field name
    ]
    const errorCodeHeaderName = 'x-amzn-errortype';
    let errorName = parseErrorCodeFromHeader(input.headers, errorCodeHeaderName) ||
            parseErrorCodeFromBody(body, errorCodeFieldNameList) ||
            undefined;          
    if (!errorName) {
        throw initServiceException<ServiceException>(new Error(), {
            $metadata: extractMetadata(input)
        })
    }
    const messageLocationList = ['message', 'Message', 'errorMessage'];
    const errorMessage = parseJsonMessage(body, messageLocationList) || '';
    //parse other properties other than name and message
    for (let errorShape of errors) {
        const errorStructure = <Structure>errorShape.shape;
        if (
            errorStructure.exceptionCode === errorName ||
            (!errorStructure.exceptionCode && errorStructure.exceptionType === errorName)              
        ) {
            let rawException = errorBodyParser.parse<any>(errorShape, body);
            throw initServiceException<ServiceException>(new Error(), {
                $metadata: extractMetadata(input),
                message: errorMessage,
                name: errorName,
                rawException: rawException
            });
        }
    }
    //parsable exception but not documented in API
    const option: ServiceExceptionOption = {
        $metadata: extractMetadata(input),
        name: errorName,
        message: errorMessage,
    }
    throw initServiceException<ServiceException>(new Error(), option)
}

function parseErrorCodeFromHeader(headers: HeaderBag, targetHeaderName: string): string|undefined {
    const errorCode = headers[targetHeaderName];
    return typeof errorCode === 'string' ? errorCode.split(':')[0] : undefined
}

function parseErrorCodeFromBody(body: string, errorCodeFieldNameList: string[]): string|undefined {
    if (body) {
        const errorOBJ = JSON.parse(body);
        for (const fieldName of errorCodeFieldNameList) {
            if (errorOBJ[fieldName]) {
                return errorOBJ[fieldName].split('#').pop();
            }
        }
    }   
    return undefined;
}

function parseJsonMessage(body: string, messageLocations: string[]): string|undefined {
    return parseErrorCodeFromBody(body, messageLocations);
}
