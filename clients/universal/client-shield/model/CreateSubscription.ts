import { CreateSubscriptionInput } from "./CreateSubscriptionInput";
import { CreateSubscriptionOutput } from "./CreateSubscriptionOutput";
import { InternalErrorException } from "./InternalErrorException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateSubscription: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateSubscription",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateSubscriptionInput
  },
  output: {
    shape: CreateSubscriptionOutput
  },
  errors: [
    {
      shape: InternalErrorException
    },
    {
      shape: ResourceAlreadyExistsException
    }
  ]
};
