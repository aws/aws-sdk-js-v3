import { DeleteMessageInput } from "../shapes/DeleteMessageInput";
import { DeleteMessageOutput } from "../shapes/DeleteMessageOutput";
import { InvalidIdFormat } from "../shapes/InvalidIdFormat";
import { ReceiptHandleIsInvalid } from "../shapes/ReceiptHandleIsInvalid";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
