import { DeleteResourceShareInput } from "./DeleteResourceShareInput";
import { DeleteResourceShareOutput } from "./DeleteResourceShareOutput";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { IdempotentParameterMismatchException } from "./IdempotentParameterMismatchException";
import { InvalidStateTransitionException } from "./InvalidStateTransitionException";
import { UnknownResourceException } from "./UnknownResourceException";
import { MalformedArnException } from "./MalformedArnException";
import { InvalidClientTokenException } from "./InvalidClientTokenException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ServerInternalException } from "./ServerInternalException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
