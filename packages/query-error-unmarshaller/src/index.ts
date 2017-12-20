import {
    BodyParser,
    Member,
    MetadataBearer,
    OperationModel,
    ResolvedHttpResponse,
    ServiceException,
    Structure,
} from '@aws/types'
import {
    ERR_RESP_SHAPE,
    ParsedErrorResponse,
} from './constants';
import {extractMetadata} from '@aws/response-metadata-extractor';
import {initServiceException} from '@aws/util-construct-error';

interface errorCommonProperties {
    errorName?: string,
    errorMessage?: string,
    requestId?: string
}

export function queryErrorUnmarshaller(operation: OperationModel, input: ResolvedHttpResponse, errorBodyParser: BodyParser): Promise<never> {
    const {body} = input;
    const {errors} = operation;
    const {errorName, errorMessage, requestId} = parseErrorCommonProperties(errorBodyParser, body);
    if (!errorName) {
        throw initServiceException<ServiceException>(
            new Error(), 
            {$metadata: {
                ...extractMetadata(input),
                requestId
            }}
        )
    }
    //parse error properties from API other than name and message
    for (let errorShape of errors) {
        const errorStructure = <Structure>errorShape.shape;
        if (
            errorStructure.exceptionCode === errorName ||
            (!errorStructure.exceptionCode && errorStructure.exceptionType === errorName)              
        ) {
            const rawException = parseErrorOwnProperties(errorShape, body, errorBodyParser);
            throw initServiceException<ServiceException>(new Error(), {
                $metadata: {
                    ...extractMetadata(input),
                    requestId
                },
                name: errorName,
                message: errorMessage,
                rawException: rawException
            });
        }
    }
    //parsable exception but not documented in API
    throw initServiceException<ServiceException>(new Error(), {
        $metadata: {
            ...extractMetadata(input),
            requestId
        },
        name: errorName,
        message: errorMessage,
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
        return {errorName: errorName, errorMessage: errorMessage, requestId: requestId};
    } 
    return {errorName: undefined, errorMessage: undefined, requestId: requestId};
}
