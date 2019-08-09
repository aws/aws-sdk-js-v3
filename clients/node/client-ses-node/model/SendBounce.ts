import { SendBounceInput } from "./SendBounceInput";
import { SendBounceOutput } from "./SendBounceOutput";
import { MessageRejected } from "./MessageRejected";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const SendBounce: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SendBounce",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SendBounceInput
  },
  output: {
    shape: SendBounceOutput,
    resultWrapper: "SendBounceResult"
  },
  errors: [
    {
      shape: MessageRejected
    }
  ]
};
