import { GetWebhookInput } from "../shapes/GetWebhookInput";
import { GetWebhookOutput } from "../shapes/GetWebhookOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { NotFoundException } from "../shapes/NotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
