import { RegisterWebhookWithThirdPartyInput } from "../shapes/RegisterWebhookWithThirdPartyInput";
import { RegisterWebhookWithThirdPartyOutput } from "../shapes/RegisterWebhookWithThirdPartyOutput";
import { ValidationException } from "../shapes/ValidationException";
import { WebhookNotFoundException } from "../shapes/WebhookNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
