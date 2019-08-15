import { ReceiveMessageInput } from "../shapes/ReceiveMessageInput";
import { ReceiveMessageOutput } from "../shapes/ReceiveMessageOutput";
import { OverLimit } from "../shapes/OverLimit";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ReceiveMessage: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ReceiveMessage",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ReceiveMessageInput
  },
  output: {
    shape: ReceiveMessageOutput,
    resultWrapper: "ReceiveMessageResult"
  },
  errors: [
    {
      shape: OverLimit
    }
  ]
};
