import { AssociateResourceShareInput } from "../shapes/AssociateResourceShareInput";
import { AssociateResourceShareOutput } from "../shapes/AssociateResourceShareOutput";
import { IdempotentParameterMismatchException } from "../shapes/IdempotentParameterMismatchException";
import { UnknownResourceException } from "../shapes/UnknownResourceException";
import { InvalidStateTransitionException } from "../shapes/InvalidStateTransitionException";
import { ResourceShareLimitExceededException } from "../shapes/ResourceShareLimitExceededException";
import { MalformedArnException } from "../shapes/MalformedArnException";
import { InvalidClientTokenException } from "../shapes/InvalidClientTokenException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { OperationNotPermittedException } from "../shapes/OperationNotPermittedException";
import { ServerInternalException } from "../shapes/ServerInternalException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AssociateResourceShare: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AssociateResourceShare",
  http: {
    method: "POST",
    requestUri: "/associateresourceshare"
  },
  input: {
    shape: AssociateResourceShareInput
  },
  output: {
    shape: AssociateResourceShareOutput
  },
  errors: [
    {
      shape: IdempotentParameterMismatchException
    },
    {
      shape: UnknownResourceException
    },
    {
      shape: InvalidStateTransitionException
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
