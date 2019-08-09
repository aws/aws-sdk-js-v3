import { UnsubscribeFromEventInput } from "./UnsubscribeFromEventInput";
import { UnsubscribeFromEventOutput } from "./UnsubscribeFromEventOutput";
import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { AccessDeniedException } from "./AccessDeniedException";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { ServiceTemporarilyUnavailableException } from "./ServiceTemporarilyUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UnsubscribeFromEvent: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UnsubscribeFromEvent",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UnsubscribeFromEventInput
  },
  output: {
    shape: UnsubscribeFromEventOutput
  },
  errors: [
    {
      shape: InternalException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: AccessDeniedException
    },
    {
      shape: NoSuchEntityException
    },
    {
      shape: ServiceTemporarilyUnavailableException
    }
  ]
};
