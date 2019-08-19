import { UpdateAliasInput } from "../shapes/UpdateAliasInput";
import { UpdateAliasOutput } from "../shapes/UpdateAliasOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { NotFoundException } from "../shapes/NotFoundException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
