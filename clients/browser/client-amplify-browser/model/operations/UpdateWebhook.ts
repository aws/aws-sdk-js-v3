import { UpdateWebhookInput } from "../shapes/UpdateWebhookInput";
import { UpdateWebhookOutput } from "../shapes/UpdateWebhookOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { DependentServiceFailureException } from "../shapes/DependentServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
