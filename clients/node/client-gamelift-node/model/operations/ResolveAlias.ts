import { ResolveAliasInput } from "../shapes/ResolveAliasInput";
import { ResolveAliasOutput } from "../shapes/ResolveAliasOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { NotFoundException } from "../shapes/NotFoundException";
import { TerminalRoutingStrategyException } from "../shapes/TerminalRoutingStrategyException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ResolveAlias: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ResolveAlias",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ResolveAliasInput
  },
  output: {
    shape: ResolveAliasOutput
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
      shape: TerminalRoutingStrategyException
    },
    {
      shape: InternalServiceException
    }
  ]
};
