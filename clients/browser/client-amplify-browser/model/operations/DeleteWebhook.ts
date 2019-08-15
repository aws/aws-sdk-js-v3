import { DeleteWebhookInput } from "../shapes/DeleteWebhookInput";
import { DeleteWebhookOutput } from "../shapes/DeleteWebhookOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { NotFoundException } from "../shapes/NotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteWebhook: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteWebhook",
  http: {
    method: "DELETE",
    requestUri: "/webhooks/{webhookId}"
  },
  input: {
    shape: DeleteWebhookInput
  },
  output: {
    shape: DeleteWebhookOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: NotFoundException
    },
    {
      shape: LimitExceededException
    }
  ]
};
