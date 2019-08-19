import { UpdateWebhookInput } from "../shapes/UpdateWebhookInput";
import { UpdateWebhookOutput } from "../shapes/UpdateWebhookOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OAuthProviderException } from "../shapes/OAuthProviderException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateWebhook: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateWebhook",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateWebhookInput
  },
  output: {
    shape: UpdateWebhookOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: OAuthProviderException
    }
  ]
};
