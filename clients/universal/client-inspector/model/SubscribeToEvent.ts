import { SubscribeToEventInput } from "./SubscribeToEventInput";
import { SubscribeToEventOutput } from "./SubscribeToEventOutput";
import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { LimitExceededException } from "./LimitExceededException";
import { AccessDeniedException } from "./AccessDeniedException";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { ServiceTemporarilyUnavailableException } from "./ServiceTemporarilyUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const SubscribeToEvent: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SubscribeToEvent",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SubscribeToEventInput
  },
  output: {
    shape: SubscribeToEventOutput
  },
  errors: [
    {
      shape: InternalException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: LimitExceededException
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
