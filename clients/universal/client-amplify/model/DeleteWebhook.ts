import { DeleteWebhookInput } from "./DeleteWebhookInput";
import { DeleteWebhookOutput } from "./DeleteWebhookOutput";
import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalFailureException } from "./InternalFailureException";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
