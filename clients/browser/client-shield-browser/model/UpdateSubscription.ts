import { UpdateSubscriptionInput } from "./UpdateSubscriptionInput";
import { UpdateSubscriptionOutput } from "./UpdateSubscriptionOutput";
import { InternalErrorException } from "./InternalErrorException";
import { LockedSubscriptionException } from "./LockedSubscriptionException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { OptimisticLockException } from "./OptimisticLockException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
