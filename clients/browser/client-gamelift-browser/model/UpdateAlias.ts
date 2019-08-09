import { UpdateAliasInput } from "./UpdateAliasInput";
import { UpdateAliasOutput } from "./UpdateAliasOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { InvalidRequestException } from "./InvalidRequestException";
import { NotFoundException } from "./NotFoundException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateAlias: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateAlias",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateAliasInput
  },
  output: {
    shape: UpdateAliasOutput
  },
  errors: [
    {
      shape: UnauthorizedException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: NotFoundException
    },
    {
      shape: InternalServiceException
    }
  ]
};
