import { ListWebhooksInput } from "../shapes/ListWebhooksInput";
import { ListWebhooksOutput } from "../shapes/ListWebhooksOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListWebhooks: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListWebhooks",
  http: {
    method: "GET",
    requestUri: "/apps/{appId}/webhooks"
  },
  input: {
    shape: ListWebhooksInput
  },
  output: {
    shape: ListWebhooksOutput
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
      shape: LimitExceededException
    }
  ]
};
