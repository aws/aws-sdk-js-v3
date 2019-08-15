import { ListSubscriptionsByTopicInput } from "../shapes/ListSubscriptionsByTopicInput";
import { ListSubscriptionsByTopicOutput } from "../shapes/ListSubscriptionsByTopicOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { NotFoundException } from "../shapes/NotFoundException";
import { AuthorizationErrorException } from "../shapes/AuthorizationErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
