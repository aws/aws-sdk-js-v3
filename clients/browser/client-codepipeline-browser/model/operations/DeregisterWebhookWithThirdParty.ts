import { DeregisterWebhookWithThirdPartyInput } from "../shapes/DeregisterWebhookWithThirdPartyInput";
import { DeregisterWebhookWithThirdPartyOutput } from "../shapes/DeregisterWebhookWithThirdPartyOutput";
import { ValidationException } from "../shapes/ValidationException";
import { WebhookNotFoundException } from "../shapes/WebhookNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
