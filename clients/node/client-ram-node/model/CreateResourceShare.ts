import { CreateResourceShareInput } from "./CreateResourceShareInput";
import { CreateResourceShareOutput } from "./CreateResourceShareOutput";
import { IdempotentParameterMismatchException } from "./IdempotentParameterMismatchException";
import { InvalidStateTransitionException } from "./InvalidStateTransitionException";
import { UnknownResourceException } from "./UnknownResourceException";
import { MalformedArnException } from "./MalformedArnException";
import { InvalidClientTokenException } from "./InvalidClientTokenException";
import { InvalidParameterException } from "./InvalidParameterException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { ResourceShareLimitExceededException } from "./ResourceShareLimitExceededException";
import { ServerInternalException } from "./ServerInternalException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateResourceShare: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateResourceShare",
  http: {
    method: "POST",
    requestUri: "/createresourceshare"
  },
  input: {
    shape: CreateResourceShareInput
  },
  output: {
    shape: CreateResourceShareOutput
  },
  errors: [
    {
      shape: IdempotentParameterMismatchException
    },
    {
      shape: InvalidStateTransitionException
    },
    {
      shape: UnknownResourceException
    },
    {
      shape: MalformedArnException
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
      shape: ResourceShareLimitExceededException
    },
    {
      shape: ServerInternalException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
