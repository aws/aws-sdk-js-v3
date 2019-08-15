import { DeleteResourceShareInput } from "../shapes/DeleteResourceShareInput";
import { DeleteResourceShareOutput } from "../shapes/DeleteResourceShareOutput";
import { OperationNotPermittedException } from "../shapes/OperationNotPermittedException";
import { IdempotentParameterMismatchException } from "../shapes/IdempotentParameterMismatchException";
import { InvalidStateTransitionException } from "../shapes/InvalidStateTransitionException";
import { UnknownResourceException } from "../shapes/UnknownResourceException";
import { MalformedArnException } from "../shapes/MalformedArnException";
import { InvalidClientTokenException } from "../shapes/InvalidClientTokenException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ServerInternalException } from "../shapes/ServerInternalException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteResourceShare: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteResourceShare",
  http: {
    method: "DELETE",
    requestUri: "/deleteresourceshare"
  },
  input: {
    shape: DeleteResourceShareInput
  },
  output: {
    shape: DeleteResourceShareOutput
  },
  errors: [
    {
      shape: OperationNotPermittedException
    },
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
      shape: ServerInternalException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
