import { GetWebhookInput } from "./GetWebhookInput";
import { GetWebhookOutput } from "./GetWebhookOutput";
import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalFailureException } from "./InternalFailureException";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetWebhook: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetWebhook",
  http: {
    method: "GET",
    requestUri: "/webhooks/{webhookId}"
  },
  input: {
    shape: GetWebhookInput
  },
  output: {
    shape: GetWebhookOutput
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
