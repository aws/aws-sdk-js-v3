import { SendMessageInput } from "../shapes/SendMessageInput";
import { SendMessageOutput } from "../shapes/SendMessageOutput";
import { InvalidMessageContents } from "../shapes/InvalidMessageContents";
import { UnsupportedOperation } from "../shapes/UnsupportedOperation";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SendMessage: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SendMessage",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SendMessageInput
  },
  output: {
    shape: SendMessageOutput,
    resultWrapper: "SendMessageResult"
  },
  errors: [
    {
      shape: InvalidMessageContents
    },
    {
      shape: UnsupportedOperation
    }
  ]
};
