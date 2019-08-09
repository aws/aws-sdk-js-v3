import { GetSubscriptionStateInput } from "./GetSubscriptionStateInput";
import { GetSubscriptionStateOutput } from "./GetSubscriptionStateOutput";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetSubscriptionState: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetSubscriptionState",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetSubscriptionStateInput
  },
  output: {
    shape: GetSubscriptionStateOutput
  },
  errors: [
    {
      shape: InternalErrorException
    }
  ]
};
