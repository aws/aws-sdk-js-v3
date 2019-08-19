import { SendBounceInput } from "../shapes/SendBounceInput";
import { SendBounceOutput } from "../shapes/SendBounceOutput";
import { MessageRejected } from "../shapes/MessageRejected";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
