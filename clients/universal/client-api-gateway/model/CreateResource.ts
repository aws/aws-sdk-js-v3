import { CreateResourceInput } from "./CreateResourceInput";
import { CreateResourceOutput } from "./CreateResourceOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { ConflictException } from "./ConflictException";
import { LimitExceededException } from "./LimitExceededException";
import { BadRequestException } from "./BadRequestException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateResource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateResource",
  http: {
    method: "POST",
    requestUri: "/restapis/{restapi_id}/resources/{parent_id}"
  },
  input: {
    shape: CreateResourceInput
  },
  output: {
    shape: CreateResourceOutput
  },
  errors: [
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
      shape: BadRequestException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
