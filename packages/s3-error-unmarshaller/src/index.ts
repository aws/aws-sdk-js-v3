import {
  BodyParser,
  Member,
  MetadataBearer,
  OperationModel,
  ResolvedHttpResponse,
  ServiceException,
  Structure,
  ServiceExceptionParser
} from "@aws-sdk/types";
import { ERR_RESP_SHAPE, ParsedErrorResponse } from "./constants";
import { extractMetadata } from "@aws-sdk/response-metadata-extractor";
import { initServiceException } from "@aws-sdk/util-error-constructor";

export const s3ErrorUnmarshaller: ServiceExceptionParser = (
  operation: OperationModel,
  input: ResolvedHttpResponse,
  errorBodyParser: BodyParser
): ServiceException => {};
