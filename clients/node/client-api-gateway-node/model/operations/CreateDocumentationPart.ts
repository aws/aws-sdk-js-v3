import { CreateDocumentationPartInput } from "../shapes/CreateDocumentationPartInput";
import { CreateDocumentationPartOutput } from "../shapes/CreateDocumentationPartOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { ConflictException } from "../shapes/ConflictException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
