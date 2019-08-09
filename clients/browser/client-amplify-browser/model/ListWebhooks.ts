import { ListWebhooksInput } from "./ListWebhooksInput";
import { ListWebhooksOutput } from "./ListWebhooksOutput";
import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalFailureException } from "./InternalFailureException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
