import { ChangeMessageVisibilityInput } from "../shapes/ChangeMessageVisibilityInput";
import { ChangeMessageVisibilityOutput } from "../shapes/ChangeMessageVisibilityOutput";
import { MessageNotInflight } from "../shapes/MessageNotInflight";
import { ReceiptHandleIsInvalid } from "../shapes/ReceiptHandleIsInvalid";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ChangeMessageVisibility: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ChangeMessageVisibility",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ChangeMessageVisibilityInput
  },
  output: {
    shape: ChangeMessageVisibilityOutput
  },
  errors: [
    {
      shape: MessageNotInflight
    },
    {
      shape: ReceiptHandleIsInvalid
    }
  ]
};
