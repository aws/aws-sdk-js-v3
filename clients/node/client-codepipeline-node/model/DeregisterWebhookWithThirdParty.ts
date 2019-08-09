import { DeregisterWebhookWithThirdPartyInput } from "./DeregisterWebhookWithThirdPartyInput";
import { DeregisterWebhookWithThirdPartyOutput } from "./DeregisterWebhookWithThirdPartyOutput";
import { ValidationException } from "./ValidationException";
import { WebhookNotFoundException } from "./WebhookNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeregisterWebhookWithThirdParty: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeregisterWebhookWithThirdParty",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeregisterWebhookWithThirdPartyInput
  },
  output: {
    shape: DeregisterWebhookWithThirdPartyOutput
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
