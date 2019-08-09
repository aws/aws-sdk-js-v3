import { DeleteWebhookInput } from "./DeleteWebhookInput";
import { DeleteWebhookOutput } from "./DeleteWebhookOutput";
import { ValidationException } from "./ValidationException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteWebhook: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteWebhook",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteWebhookInput
  },
  output: {
    shape: DeleteWebhookOutput
  },
  errors: [
    {
      shape: ValidationException
    },
    {
      shape: ConcurrentModificationException
    }
  ]
};
