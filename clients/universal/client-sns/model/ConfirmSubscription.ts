import { ConfirmSubscriptionInput } from "./ConfirmSubscriptionInput";
import { ConfirmSubscriptionOutput } from "./ConfirmSubscriptionOutput";
import { SubscriptionLimitExceededException } from "./SubscriptionLimitExceededException";
import { InvalidParameterException } from "./InvalidParameterException";
import { NotFoundException } from "./NotFoundException";
import { InternalErrorException } from "./InternalErrorException";
import { AuthorizationErrorException } from "./AuthorizationErrorException";
import { FilterPolicyLimitExceededException } from "./FilterPolicyLimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
