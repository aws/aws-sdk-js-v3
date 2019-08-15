import { CreateWebhookInput } from "../shapes/CreateWebhookInput";
import { CreateWebhookOutput } from "../shapes/CreateWebhookOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { DependentServiceFailureException } from "../shapes/DependentServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateWebhook: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateWebhook",
  http: {
    method: "POST",
    requestUri: "/apps/{appId}/webhooks"
  },
  input: {
    shape: CreateWebhookInput
  },
  output: {
    shape: CreateWebhookOutput
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
      shape: LimitExceededException
    },
    {
      shape: DependentServiceFailureException
    }
  ]
};
