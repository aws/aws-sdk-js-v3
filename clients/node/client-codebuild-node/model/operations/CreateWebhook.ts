import { CreateWebhookInput } from "../shapes/CreateWebhookInput";
import { CreateWebhookOutput } from "../shapes/CreateWebhookOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { OAuthProviderException } from "../shapes/OAuthProviderException";
import { ResourceAlreadyExistsException } from "../shapes/ResourceAlreadyExistsException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
