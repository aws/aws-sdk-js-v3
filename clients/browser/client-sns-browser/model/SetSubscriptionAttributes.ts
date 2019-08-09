import { SetSubscriptionAttributesInput } from "./SetSubscriptionAttributesInput";
import { SetSubscriptionAttributesOutput } from "./SetSubscriptionAttributesOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { FilterPolicyLimitExceededException } from "./FilterPolicyLimitExceededException";
import { InternalErrorException } from "./InternalErrorException";
import { NotFoundException } from "./NotFoundException";
import { AuthorizationErrorException } from "./AuthorizationErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
