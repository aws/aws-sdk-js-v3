import { UpdateDocumentationPartInput } from "../shapes/UpdateDocumentationPartInput";
import { UpdateDocumentationPartOutput } from "../shapes/UpdateDocumentationPartOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ConflictException } from "../shapes/ConflictException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateDocumentationPart: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateDocumentationPart",
  http: {
    method: "PATCH",
    requestUri: "/restapis/{restapi_id}/documentation/parts/{part_id}"
  },
  input: {
    shape: UpdateDocumentationPartInput
  },
  output: {
    shape: UpdateDocumentationPartOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: NotFoundException
    },
    {
      shape: ConflictException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
