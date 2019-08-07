import { DeleteMessageInput } from "./DeleteMessageInput";
import { DeleteMessageOutput } from "./DeleteMessageOutput";
import { InvalidIdFormat } from "./InvalidIdFormat";
import { ReceiptHandleIsInvalid } from "./ReceiptHandleIsInvalid";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteMessage: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteMessage",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteMessageInput
  },
  output: {
    shape: DeleteMessageOutput
  },
  errors: [
    {
      shape: InvalidIdFormat
    },
    {
      shape: ReceiptHandleIsInvalid
    }
  ]
};
