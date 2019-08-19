import { DeleteSpotDatafeedSubscriptionInput } from "../shapes/DeleteSpotDatafeedSubscriptionInput";
import { DeleteSpotDatafeedSubscriptionOutput } from "../shapes/DeleteSpotDatafeedSubscriptionOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteSpotDatafeedSubscription: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteSpotDatafeedSubscription",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteSpotDatafeedSubscriptionInput
  },
  output: {
    shape: DeleteSpotDatafeedSubscriptionOutput
  },
  errors: []
};
