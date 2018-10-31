import {extractMetadata} from '@aws-sdk/response-metadata-extractor';
import {
    initServiceException,
    ServiceExceptionOption
} from '@aws-sdk/util-error-constructor';
import {
    BodyParser,
    HeaderBag,
    OperationModel,
    ResolvedHttpResponse,
    ServiceException,
    ServiceExceptionParser,
    Structure,
} from '@aws-sdk/types';

export const jsonErrorUnmarshaller: ServiceExceptionParser = (
    operation: OperationModel,
    response: ResolvedHttpResponse,
    errorBodyParser: BodyParser<string>,
): ServiceException => {
    const {body} = response;
    const {errors, name: operationName} = operation;
    const errorCodeFieldNameList = [
        '__type', //default field name
        'code', //currently only Glacier uses this field name
    ]
    const errorCodeHeaderName = 'x-amzn-errortype';
    let errorName = parseErrorCodeFromHeader(response.headers, errorCodeHeaderName) ||
            parseErrorCodeFromBody(body, errorCodeFieldNameList) ||
            undefined;          
    if (!errorName) {
        return initServiceException(new Error(), {
            $metadata: extractMetadata(response),
            operationName,
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
            let rawException = 
                errorStructure.members
                    ? errorBodyParser.parse<any>(errorShape, body)
                    : {};
            return initServiceException(new Error(), {
                $metadata: extractMetadata(response),
                message: errorMessage,
                name: errorName,
                rawException: rawException,
                operationName,
            });
        }
    }
    //parsable exception but not documented in API
    const option: ServiceExceptionOption = {
        $metadata: extractMetadata(response),
        name: errorName,
        message: errorMessage,
    }
    return initServiceException(new Error(), option)
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
}

function parseJsonMessage(body: string, messageLocations: string[]): string|undefined {
    return parseErrorCodeFromBody(body, messageLocations);
}

