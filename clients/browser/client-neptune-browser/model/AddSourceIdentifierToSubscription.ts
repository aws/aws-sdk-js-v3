import { AddSourceIdentifierToSubscriptionInput } from "./AddSourceIdentifierToSubscriptionInput";
import { AddSourceIdentifierToSubscriptionOutput } from "./AddSourceIdentifierToSubscriptionOutput";
import { SubscriptionNotFoundFault } from "./SubscriptionNotFoundFault";
import { SourceNotFoundFault } from "./SourceNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const AddSourceIdentifierToSubscription: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AddSourceIdentifierToSubscription",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AddSourceIdentifierToSubscriptionInput
  },
  output: {
    shape: AddSourceIdentifierToSubscriptionOutput,
    resultWrapper: "AddSourceIdentifierToSubscriptionResult"
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
