import { AssociateResourceShareInput } from "./AssociateResourceShareInput";
import { AssociateResourceShareOutput } from "./AssociateResourceShareOutput";
import { IdempotentParameterMismatchException } from "./IdempotentParameterMismatchException";
import { UnknownResourceException } from "./UnknownResourceException";
import { InvalidStateTransitionException } from "./InvalidStateTransitionException";
import { ResourceShareLimitExceededException } from "./ResourceShareLimitExceededException";
import { MalformedArnException } from "./MalformedArnException";
import { InvalidClientTokenException } from "./InvalidClientTokenException";
import { InvalidParameterException } from "./InvalidParameterException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { ServerInternalException } from "./ServerInternalException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
