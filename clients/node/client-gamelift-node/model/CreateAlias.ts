import { CreateAliasInput } from "./CreateAliasInput";
import { CreateAliasOutput } from "./CreateAliasOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ConflictException } from "./ConflictException";
import { InternalServiceException } from "./InternalServiceException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateAlias: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateAlias",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateAliasInput
  },
  output: {
    shape: CreateAliasOutput
  },
  errors: [
    {
      shape: UnauthorizedException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: ConflictException
    },
    {
      shape: InternalServiceException
    },
    {
      shape: LimitExceededException
    }
  ]
};
