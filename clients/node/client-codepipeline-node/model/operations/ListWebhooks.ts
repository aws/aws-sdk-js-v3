import { ListWebhooksInput } from "../shapes/ListWebhooksInput";
import { ListWebhooksOutput } from "../shapes/ListWebhooksOutput";
import { ValidationException } from "../shapes/ValidationException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
