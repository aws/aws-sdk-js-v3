import { CreateWebhookInput } from "./CreateWebhookInput";
import { CreateWebhookOutput } from "./CreateWebhookOutput";
import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { InternalFailureException } from "./InternalFailureException";
import { LimitExceededException } from "./LimitExceededException";
import { DependentServiceFailureException } from "./DependentServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
