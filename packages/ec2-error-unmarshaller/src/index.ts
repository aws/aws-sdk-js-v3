import {
    BodyParser,
    Member,
    OperationModel,
    ResolvedHttpResponse,
    ServiceException,
    Structure,
    ServiceExceptionParser,
} from '@aws-sdk/types'
import {
    ERR_RESP_SHAPE_LEGACY,
    ParsedLegacyErrorResponse,
} from './constants';
import {extractMetadata} from '@aws-sdk/response-metadata-extractor';
import {initServiceException} from '@aws-sdk/util-error-constructor';

interface errorCommonProperties {
    errorName?: string,
    errorMessage?: string,
    requestId?: string
}

export const ec2ErrorUnmarshaller: ServiceExceptionParser = (
    operation: OperationModel,
    input: ResolvedHttpResponse,
    errorBodyParser: BodyParser
): ServiceException => {
    const {body} = input;
    const {errors, name: operationName} = operation;
    const {errorName, errorMessage, requestId} = parseErrorCommonProperties(errorBodyParser, body);
    if (!errorName) {
        return initServiceException(new Error(), {
            $metadata: {
                ...extractMetadata(input),
                requestId
            },
            operationName
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
    let wrappedErrorShape: Member = {
        shape: {
            type: 'structure',
            required: [],
            members: {},
        }
    };
    (wrappedErrorShape.shape as Structure).members = {
        Errors: {
            shape: {
                type: 'structure',
                required: [],
                members: {
                    Error: errorShape
                }
            }
        }
    }
    let rawException = errorBodyParser.parse<any>(wrappedErrorShape, body);
    return rawException.Errors.Error;
}

function parseErrorCommonProperties(errorBodyParser: BodyParser, body: string): errorCommonProperties {
    //old services like SDB & EC2, their exceptions have one more layer of `<Errors>`
    let parsedLegacyErrorResponse = errorBodyParser.parse<ParsedLegacyErrorResponse>(ERR_RESP_SHAPE_LEGACY, body)
    let requestId = parsedLegacyErrorResponse.$metadata ? parsedLegacyErrorResponse.$metadata.requestId : undefined
    if (parsedLegacyErrorResponse.Errors) {
        const {
            Errors: {
                Error: {
                    Code: errorName = undefined,
                    Message: errorMessage = undefined
                }
            }
        } = parsedLegacyErrorResponse;
        return {errorName: errorName, errorMessage: errorMessage, requestId: requestId};
    }
    return {errorName: undefined, errorMessage: undefined, requestId: requestId};
}
