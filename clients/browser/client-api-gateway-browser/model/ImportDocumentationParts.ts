import { ImportDocumentationPartsInput } from "./ImportDocumentationPartsInput";
import { ImportDocumentationPartsOutput } from "./ImportDocumentationPartsOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { BadRequestException } from "./BadRequestException";
import { LimitExceededException } from "./LimitExceededException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ImportDocumentationParts: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ImportDocumentationParts",
  http: {
    method: "PUT",
    requestUri: "/restapis/{restapi_id}/documentation/parts"
  },
  input: {
    shape: ImportDocumentationPartsInput
  },
  output: {
    shape: ImportDocumentationPartsOutput
  },
  errors: [
    {
      shape: UnauthorizedException
    },
    {
      shape: NotFoundException
    },
    {
      shape: BadRequestException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
