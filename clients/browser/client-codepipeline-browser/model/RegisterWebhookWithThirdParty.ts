import { RegisterWebhookWithThirdPartyInput } from "./RegisterWebhookWithThirdPartyInput";
import { RegisterWebhookWithThirdPartyOutput } from "./RegisterWebhookWithThirdPartyOutput";
import { ValidationException } from "./ValidationException";
import { WebhookNotFoundException } from "./WebhookNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RegisterWebhookWithThirdParty: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RegisterWebhookWithThirdParty",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RegisterWebhookWithThirdPartyInput
  },
  output: {
    shape: RegisterWebhookWithThirdPartyOutput
  },
  errors: [
    {
      shape: ValidationException
    },
    {
      shape: WebhookNotFoundException
    }
  ]
};
