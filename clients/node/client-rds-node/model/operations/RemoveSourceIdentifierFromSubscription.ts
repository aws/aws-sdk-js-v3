import { RemoveSourceIdentifierFromSubscriptionInput } from "../shapes/RemoveSourceIdentifierFromSubscriptionInput";
import { RemoveSourceIdentifierFromSubscriptionOutput } from "../shapes/RemoveSourceIdentifierFromSubscriptionOutput";
import { SubscriptionNotFoundFault } from "../shapes/SubscriptionNotFoundFault";
import { SourceNotFoundFault } from "../shapes/SourceNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RemoveSourceIdentifierFromSubscription: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RemoveSourceIdentifierFromSubscription",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RemoveSourceIdentifierFromSubscriptionInput
  },
  output: {
    shape: RemoveSourceIdentifierFromSubscriptionOutput,
    resultWrapper: "RemoveSourceIdentifierFromSubscriptionResult"
  },
  errors: [
    {
      shape: SubscriptionNotFoundFault
    },
    {
      shape: SourceNotFoundFault
    }
  ]
};
