import { CreateDocumentationVersionInput } from "../shapes/CreateDocumentationVersionInput";
import { CreateDocumentationVersionOutput } from "../shapes/CreateDocumentationVersionOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { ConflictException } from "../shapes/ConflictException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateDocumentationVersion: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateDocumentationVersion",
  http: {
    method: "POST",
    requestUri: "/restapis/{restapi_id}/documentation/versions"
  },
  input: {
    shape: CreateDocumentationVersionInput
  },
  output: {
    shape: CreateDocumentationVersionOutput
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
