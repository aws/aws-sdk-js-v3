import { SubscribeInput } from "../shapes/SubscribeInput";
import { SubscribeOutput } from "../shapes/SubscribeOutput";
import { SubscriptionLimitExceededException } from "../shapes/SubscriptionLimitExceededException";
import { FilterPolicyLimitExceededException } from "../shapes/FilterPolicyLimitExceededException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { NotFoundException } from "../shapes/NotFoundException";
import { AuthorizationErrorException } from "../shapes/AuthorizationErrorException";
import { InvalidSecurityException } from "../shapes/InvalidSecurityException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const Subscribe: _Operation_ = {
  metadata: ServiceMetadata,
  name: "Subscribe",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SubscribeInput
  },
  output: {
    shape: SubscribeOutput,
    resultWrapper: "SubscribeResult"
  },
  errors: [
    {
      shape: SubscriptionLimitExceededException
    },
    {
      shape: FilterPolicyLimitExceededException
    },
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
    },
    {
      shape: InvalidSecurityException
    }
  ]
};
