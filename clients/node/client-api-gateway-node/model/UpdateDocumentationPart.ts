import { UpdateDocumentationPartInput } from "./UpdateDocumentationPartInput";
import { UpdateDocumentationPartOutput } from "./UpdateDocumentationPartOutput";
import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { ConflictException } from "./ConflictException";
import { LimitExceededException } from "./LimitExceededException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
