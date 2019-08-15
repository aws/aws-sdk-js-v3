import { CreateSpotDatafeedSubscriptionInput } from "../shapes/CreateSpotDatafeedSubscriptionInput";
import { CreateSpotDatafeedSubscriptionOutput } from "../shapes/CreateSpotDatafeedSubscriptionOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateSpotDatafeedSubscription: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateSpotDatafeedSubscription",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateSpotDatafeedSubscriptionInput
  },
  output: {
    shape: CreateSpotDatafeedSubscriptionOutput
  },
  errors: []
};
