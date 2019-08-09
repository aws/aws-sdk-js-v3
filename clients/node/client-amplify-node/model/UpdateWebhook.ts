import { UpdateWebhookInput } from "./UpdateWebhookInput";
import { UpdateWebhookOutput } from "./UpdateWebhookOutput";
import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { InternalFailureException } from "./InternalFailureException";
import { DependentServiceFailureException } from "./DependentServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateWebhook: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateWebhook",
  http: {
    method: "POST",
    requestUri: "/webhooks/{webhookId}"
  },
  input: {
    shape: UpdateWebhookInput
  },
  output: {
    shape: UpdateWebhookOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: NotFoundException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: DependentServiceFailureException
    }
  ]
};
