import { DeleteAliasInput } from "./DeleteAliasInput";
import { DeleteAliasOutput } from "./DeleteAliasOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
