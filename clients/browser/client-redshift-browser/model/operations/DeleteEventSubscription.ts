import { DeleteEventSubscriptionInput } from "../shapes/DeleteEventSubscriptionInput";
import { DeleteEventSubscriptionOutput } from "../shapes/DeleteEventSubscriptionOutput";
import { SubscriptionNotFoundFault } from "../shapes/SubscriptionNotFoundFault";
import { InvalidSubscriptionStateFault } from "../shapes/InvalidSubscriptionStateFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteEventSubscription: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteEventSubscription",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteEventSubscriptionInput
  },
  output: {
    shape: DeleteEventSubscriptionOutput
  },
  errors: [
    {
      shape: SubscriptionNotFoundFault
    },
    {
      shape: InvalidSubscriptionStateFault
    }
  ]
};
