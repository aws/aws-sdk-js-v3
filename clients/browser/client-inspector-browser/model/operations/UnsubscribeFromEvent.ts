import { UnsubscribeFromEventInput } from "../shapes/UnsubscribeFromEventInput";
import { UnsubscribeFromEventOutput } from "../shapes/UnsubscribeFromEventOutput";
import { InternalException } from "../shapes/InternalException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { ServiceTemporarilyUnavailableException } from "../shapes/ServiceTemporarilyUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
