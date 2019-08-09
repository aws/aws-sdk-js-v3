import { DisassociateResourceShareInput } from "./DisassociateResourceShareInput";
import { DisassociateResourceShareOutput } from "./DisassociateResourceShareOutput";
import { IdempotentParameterMismatchException } from "./IdempotentParameterMismatchException";
import { ResourceShareLimitExceededException } from "./ResourceShareLimitExceededException";
import { MalformedArnException } from "./MalformedArnException";
import { InvalidStateTransitionException } from "./InvalidStateTransitionException";
import { InvalidClientTokenException } from "./InvalidClientTokenException";
import { InvalidParameterException } from "./InvalidParameterException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { ServerInternalException } from "./ServerInternalException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { UnknownResourceException } from "./UnknownResourceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DisassociateResourceShare: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisassociateResourceShare",
  http: {
    method: "POST",
    requestUri: "/disassociateresourceshare"
  },
  input: {
    shape: DisassociateResourceShareInput
  },
  output: {
    shape: DisassociateResourceShareOutput
  },
  errors: [
    {
      shape: IdempotentParameterMismatchException
    },
    {
      shape: ResourceShareLimitExceededException
    },
    {
      shape: MalformedArnException
    },
    {
      shape: InvalidStateTransitionException
    },
    {
      shape: InvalidClientTokenException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: OperationNotPermittedException
    },
    {
      shape: ServerInternalException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: UnknownResourceException
    }
  ]
};
