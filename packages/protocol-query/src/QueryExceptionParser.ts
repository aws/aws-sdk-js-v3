import {HttpResponse, Member, BodyParser, ServiceException, Structure, MetadataBearer, OperationModel, ResolvedHttpResponse} from '@aws/types'
import {
    ERR_RESP_SHAPE,
    ParsedErrorResponse
} from './constant';
import {extractMetadata} from '@aws/response-metadata-extractor';
import {
    initServiceException,
    ServiceExceptionOption,
} from '@aws/util-exceptions';

export function queryThrowException(operation: OperationModel, input: ResolvedHttpResponse, errorBodyParser: BodyParser): Promise<never> {
    const {body} = input;
    const {errors} = operation;
    let preparsedErrorResponse = errorBodyParser.parse<ParsedErrorResponse>(ERR_RESP_SHAPE, body);
    const errorName = (preparsedErrorResponse && preparsedErrorResponse.Error) ? preparsedErrorResponse.Error.Code : undefined;
    const errorMessage = (preparsedErrorResponse && preparsedErrorResponse.Error)  ? preparsedErrorResponse.Error.Message : undefined;
    const {$metadata: {requestId}} = preparsedErrorResponse;
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
        return undefined;
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
    let rawException = errorBodyParser.parse<MetadataBearer & {Error: any}>(wrappedErrorShape, body);
    return rawException.Error;
}
