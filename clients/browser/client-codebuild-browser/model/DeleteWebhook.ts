import { DeleteWebhookInput } from "./DeleteWebhookInput";
import { DeleteWebhookOutput } from "./DeleteWebhookOutput";
import { InvalidInputException } from "./InvalidInputException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OAuthProviderException } from "./OAuthProviderException";
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
