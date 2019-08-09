import { ListSubscriptionsByTopicInput } from "./ListSubscriptionsByTopicInput";
import { ListSubscriptionsByTopicOutput } from "./ListSubscriptionsByTopicOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { InternalErrorException } from "./InternalErrorException";
import { NotFoundException } from "./NotFoundException";
import { AuthorizationErrorException } from "./AuthorizationErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListSubscriptionsByTopic: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListSubscriptionsByTopic",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListSubscriptionsByTopicInput
  },
  output: {
    shape: ListSubscriptionsByTopicOutput,
    resultWrapper: "ListSubscriptionsByTopicResult"
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: InternalErrorException
    },
    {
      shape: NotFoundException
    },
    {
      shape: AuthorizationErrorException
    }
  ]
};
