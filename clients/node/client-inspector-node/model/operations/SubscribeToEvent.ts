import { SubscribeToEventInput } from "../shapes/SubscribeToEventInput";
import { SubscribeToEventOutput } from "../shapes/SubscribeToEventOutput";
import { InternalException } from "../shapes/InternalException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { ServiceTemporarilyUnavailableException } from "../shapes/ServiceTemporarilyUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
