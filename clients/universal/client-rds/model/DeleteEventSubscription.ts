import { DeleteEventSubscriptionInput } from "./DeleteEventSubscriptionInput";
import { DeleteEventSubscriptionOutput } from "./DeleteEventSubscriptionOutput";
import { SubscriptionNotFoundFault } from "./SubscriptionNotFoundFault";
import { InvalidEventSubscriptionStateFault } from "./InvalidEventSubscriptionStateFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
    shape: DeleteEventSubscriptionOutput,
    resultWrapper: "DeleteEventSubscriptionResult"
  },
  errors: [
    {
      shape: SubscriptionNotFoundFault
    },
    {
      shape: InvalidEventSubscriptionStateFault
    }
  ]
};
