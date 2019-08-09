import { DeleteSubscriptionInput } from "./DeleteSubscriptionInput";
import { DeleteSubscriptionOutput } from "./DeleteSubscriptionOutput";
import { InternalErrorException } from "./InternalErrorException";
import { LockedSubscriptionException } from "./LockedSubscriptionException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
