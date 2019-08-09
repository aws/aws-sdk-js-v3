import { CreateWebhookInput } from "./CreateWebhookInput";
import { CreateWebhookOutput } from "./CreateWebhookOutput";
import { InvalidInputException } from "./InvalidInputException";
import { OAuthProviderException } from "./OAuthProviderException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateWebhook: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateWebhook",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateWebhookInput
  },
  output: {
    shape: CreateWebhookOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: OAuthProviderException
    },
    {
      shape: ResourceAlreadyExistsException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
