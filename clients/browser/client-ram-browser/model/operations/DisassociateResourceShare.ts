import { DisassociateResourceShareInput } from "../shapes/DisassociateResourceShareInput";
import { DisassociateResourceShareOutput } from "../shapes/DisassociateResourceShareOutput";
import { IdempotentParameterMismatchException } from "../shapes/IdempotentParameterMismatchException";
import { ResourceShareLimitExceededException } from "../shapes/ResourceShareLimitExceededException";
import { MalformedArnException } from "../shapes/MalformedArnException";
import { InvalidStateTransitionException } from "../shapes/InvalidStateTransitionException";
import { InvalidClientTokenException } from "../shapes/InvalidClientTokenException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { OperationNotPermittedException } from "../shapes/OperationNotPermittedException";
import { ServerInternalException } from "../shapes/ServerInternalException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { UnknownResourceException } from "../shapes/UnknownResourceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
