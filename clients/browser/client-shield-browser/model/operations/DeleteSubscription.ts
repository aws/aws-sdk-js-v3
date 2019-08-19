import { DeleteSubscriptionInput } from "../shapes/DeleteSubscriptionInput";
import { DeleteSubscriptionOutput } from "../shapes/DeleteSubscriptionOutput";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { LockedSubscriptionException } from "../shapes/LockedSubscriptionException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteSubscription: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteSubscription",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteSubscriptionInput
  },
  output: {
    shape: DeleteSubscriptionOutput
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
    }
  ]
};
