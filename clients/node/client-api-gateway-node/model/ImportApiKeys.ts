import { ImportApiKeysInput } from "./ImportApiKeysInput";
import { ImportApiKeysOutput } from "./ImportApiKeysOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { LimitExceededException } from "./LimitExceededException";
import { BadRequestException } from "./BadRequestException";
import { ConflictException } from "./ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
