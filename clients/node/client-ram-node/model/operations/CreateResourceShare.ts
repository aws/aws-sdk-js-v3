import { CreateResourceShareInput } from "../shapes/CreateResourceShareInput";
import { CreateResourceShareOutput } from "../shapes/CreateResourceShareOutput";
import { IdempotentParameterMismatchException } from "../shapes/IdempotentParameterMismatchException";
import { InvalidStateTransitionException } from "../shapes/InvalidStateTransitionException";
import { UnknownResourceException } from "../shapes/UnknownResourceException";
import { MalformedArnException } from "../shapes/MalformedArnException";
import { InvalidClientTokenException } from "../shapes/InvalidClientTokenException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { OperationNotPermittedException } from "../shapes/OperationNotPermittedException";
import { ResourceShareLimitExceededException } from "../shapes/ResourceShareLimitExceededException";
import { ServerInternalException } from "../shapes/ServerInternalException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
