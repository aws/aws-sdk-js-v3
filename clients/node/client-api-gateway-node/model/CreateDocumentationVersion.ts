import { CreateDocumentationVersionInput } from "./CreateDocumentationVersionInput";
import { CreateDocumentationVersionOutput } from "./CreateDocumentationVersionOutput";
import { BadRequestException } from "./BadRequestException";
import { ConflictException } from "./ConflictException";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
