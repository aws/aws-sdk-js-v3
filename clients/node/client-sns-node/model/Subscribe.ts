import { SubscribeInput } from "./SubscribeInput";
import { SubscribeOutput } from "./SubscribeOutput";
import { SubscriptionLimitExceededException } from "./SubscriptionLimitExceededException";
import { FilterPolicyLimitExceededException } from "./FilterPolicyLimitExceededException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InternalErrorException } from "./InternalErrorException";
import { NotFoundException } from "./NotFoundException";
import { AuthorizationErrorException } from "./AuthorizationErrorException";
import { InvalidSecurityException } from "./InvalidSecurityException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
