import { SetSubscriptionAttributesInput } from "../shapes/SetSubscriptionAttributesInput";
import { SetSubscriptionAttributesOutput } from "../shapes/SetSubscriptionAttributesOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { FilterPolicyLimitExceededException } from "../shapes/FilterPolicyLimitExceededException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { NotFoundException } from "../shapes/NotFoundException";
import { AuthorizationErrorException } from "../shapes/AuthorizationErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SetSubscriptionAttributes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SetSubscriptionAttributes",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SetSubscriptionAttributesInput
  },
  output: {
    shape: SetSubscriptionAttributesOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: FilterPolicyLimitExceededException
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
