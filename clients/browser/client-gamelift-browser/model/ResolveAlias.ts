import { ResolveAliasInput } from "./ResolveAliasInput";
import { ResolveAliasOutput } from "./ResolveAliasOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { InvalidRequestException } from "./InvalidRequestException";
import { NotFoundException } from "./NotFoundException";
import { TerminalRoutingStrategyException } from "./TerminalRoutingStrategyException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
