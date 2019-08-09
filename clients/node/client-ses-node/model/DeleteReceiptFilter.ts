import { DeleteReceiptFilterInput } from "./DeleteReceiptFilterInput";
import { DeleteReceiptFilterOutput } from "./DeleteReceiptFilterOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteReceiptFilter: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteReceiptFilter",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteReceiptFilterInput
  },
  output: {
    shape: DeleteReceiptFilterOutput,
    resultWrapper: "DeleteReceiptFilterResult"
  },
  errors: []
};
