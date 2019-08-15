import { DeleteAliasInput } from "../shapes/DeleteAliasInput";
import { DeleteAliasOutput } from "../shapes/DeleteAliasOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteAlias: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteAlias",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteAliasInput
  },
  output: {
    shape: DeleteAliasOutput
  },
  errors: [
    {
      shape: UnauthorizedException
    },
    {
      shape: NotFoundException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: InternalServiceException
    }
  ]
};
