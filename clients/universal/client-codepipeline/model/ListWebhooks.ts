import { ListWebhooksInput } from "./ListWebhooksInput";
import { ListWebhooksOutput } from "./ListWebhooksOutput";
import { ValidationException } from "./ValidationException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListWebhooks: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListWebhooks",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListWebhooksInput
  },
  output: {
    shape: ListWebhooksOutput
  },
  errors: [
    {
      shape: ValidationException
    },
    {
      shape: InvalidNextTokenException
    }
  ]
};
