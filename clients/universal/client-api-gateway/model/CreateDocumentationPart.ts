import { CreateDocumentationPartInput } from "./CreateDocumentationPartInput";
import { CreateDocumentationPartOutput } from "./CreateDocumentationPartOutput";
import { BadRequestException } from "./BadRequestException";
import { ConflictException } from "./ConflictException";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateDocumentationPart: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateDocumentationPart",
  http: {
    method: "POST",
    requestUri: "/restapis/{restapi_id}/documentation/parts"
  },
  input: {
    shape: CreateDocumentationPartInput
  },
  output: {
    shape: CreateDocumentationPartOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: ConflictException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: NotFoundException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
