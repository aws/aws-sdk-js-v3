import { UpdateWebhookInput } from "./UpdateWebhookInput";
import { UpdateWebhookOutput } from "./UpdateWebhookOutput";
import { InvalidInputException } from "./InvalidInputException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OAuthProviderException } from "./OAuthProviderException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
