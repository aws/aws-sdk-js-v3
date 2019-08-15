import { UpdateSubscriptionInput } from "../shapes/UpdateSubscriptionInput";
import { UpdateSubscriptionOutput } from "../shapes/UpdateSubscriptionOutput";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { LockedSubscriptionException } from "../shapes/LockedSubscriptionException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { OptimisticLockException } from "../shapes/OptimisticLockException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateSubscription: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateSubscription",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateSubscriptionInput
  },
  output: {
    shape: UpdateSubscriptionOutput
  },
  errors: [
    {
      shape: InternalErrorException
    },
    {
      shape: LockedSubscriptionException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: OptimisticLockException
    }
  ]
};
