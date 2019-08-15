import { ImportApiKeysInput } from "../shapes/ImportApiKeysInput";
import { ImportApiKeysOutput } from "../shapes/ImportApiKeysOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ConflictException } from "../shapes/ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ImportApiKeys: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ImportApiKeys",
  http: {
    method: "POST",
    requestUri: "/apikeys?mode=import"
  },
  input: {
    shape: ImportApiKeysInput
  },
  output: {
    shape: ImportApiKeysOutput
  },
  errors: [
    {
      shape: UnauthorizedException
    },
    {
      shape: NotFoundException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: BadRequestException
    },
    {
      shape: ConflictException
    }
  ]
};
