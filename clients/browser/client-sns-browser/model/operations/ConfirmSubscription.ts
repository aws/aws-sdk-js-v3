import { ConfirmSubscriptionInput } from "../shapes/ConfirmSubscriptionInput";
import { ConfirmSubscriptionOutput } from "../shapes/ConfirmSubscriptionOutput";
import { SubscriptionLimitExceededException } from "../shapes/SubscriptionLimitExceededException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { NotFoundException } from "../shapes/NotFoundException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { AuthorizationErrorException } from "../shapes/AuthorizationErrorException";
import { FilterPolicyLimitExceededException } from "../shapes/FilterPolicyLimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ConfirmSubscription: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ConfirmSubscription",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ConfirmSubscriptionInput
  },
  output: {
    shape: ConfirmSubscriptionOutput,
    resultWrapper: "ConfirmSubscriptionResult"
  },
  errors: [
    {
      shape: SubscriptionLimitExceededException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: NotFoundException
    },
    {
      shape: InternalErrorException
    },
    {
      shape: AuthorizationErrorException
    },
    {
      shape: FilterPolicyLimitExceededException
    }
  ]
};
