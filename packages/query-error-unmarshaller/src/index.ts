import {
    BodyParser,
    Member,
    MetadataBearer,
    OperationModel,
    ResolvedHttpResponse,
    ServiceException,
    Structure,
    ServiceExceptionParser,
} from '@aws/types'
import {
    ERR_RESP_SHAPE,
    ParsedErrorResponse,
} from './constants';
import {extractMetadata} from '@aws/response-metadata-extractor';
import {initServiceException} from '@aws/util-error-constructor';

interface errorCommonProperties {
    name?: string,
    message?: string,
    requestId?: string
}

export const queryErrorUnmarshaller: ServiceExceptionParser = (
    operation: OperationModel,
    input: ResolvedHttpResponse,
    errorBodyParser: BodyParser
): ServiceException => {
    const {body} = input;
    const {errors, name: operationName} = operation;
    const {name: errorName, message: errorMessage, requestId} = parseErrorCommonProperties(errorBodyParser, body);
    const $metadata = {
        ...extractMetadata(input),
        requestId
    }
    if (!errorName) {
        return initServiceException(new Error(), {
            $metadata,
            operationName,
        })
    }
    //parse error properties from API other than name and message
    for (let errorShape of errors) {
        const errorStructure = <Structure>errorShape.shape;
        if (
            errorStructure.exceptionCode === errorName ||
            (!errorStructure.exceptionCode && errorStructure.exceptionType === errorName)              
        ) {
            const rawException = parseErrorOwnProperties(errorShape, body, errorBodyParser);
            return initServiceException(new Error(), {
                $metadata: {
                    ...extractMetadata(input),
                    requestId
                },
                name: errorName,
                message: errorMessage,
                rawException: rawException,
                operationName,
            });
        }
    }
    //parsable exception but not documented in API
    return initServiceException(new Error(), {
        $metadata: {
            ...extractMetadata(input),
            requestId
        },
        name: errorName,
        message: errorMessage,
        operationName,
    })
}

function parseErrorOwnProperties(errorShape: Member, body: string, errorBodyParser: BodyParser): any {
    if(!(errorShape.shape as Structure).members) {
        return {};
    }
    const wrappedErrorShape: Member = {
        shape: {
            type: 'structure',
            required: [],
            members: {
                Error: errorShape
            }
        }
    }
    let rawException = errorBodyParser.parse<any>(wrappedErrorShape, body);
    return rawException.Error;
}

function parseErrorCommonProperties(errorBodyParser: BodyParser, body: string): errorCommonProperties {
    let parsedErrorResponse = errorBodyParser.parse<ParsedErrorResponse>(ERR_RESP_SHAPE, body);
    let requestId = parsedErrorResponse.$metadata ? parsedErrorResponse.$metadata.requestId : undefined
    if(parsedErrorResponse.Error) {
        const {
            Error: {
                Code: errorName = undefined,
                Message: errorMessage = undefined
            }, $metadata: {requestId}
        }= parsedErrorResponse;
        return {name: errorName, message: errorMessage, requestId: requestId};
    } 
    return {name: undefined, message: undefined, requestId: requestId};
}
