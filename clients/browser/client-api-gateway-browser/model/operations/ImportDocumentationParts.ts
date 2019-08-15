import { ImportDocumentationPartsInput } from "../shapes/ImportDocumentationPartsInput";
import { ImportDocumentationPartsOutput } from "../shapes/ImportDocumentationPartsOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { BadRequestException } from "../shapes/BadRequestException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
