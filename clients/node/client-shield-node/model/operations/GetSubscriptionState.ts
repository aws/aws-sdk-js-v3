import { GetSubscriptionStateInput } from "../shapes/GetSubscriptionStateInput";
import { GetSubscriptionStateOutput } from "../shapes/GetSubscriptionStateOutput";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
