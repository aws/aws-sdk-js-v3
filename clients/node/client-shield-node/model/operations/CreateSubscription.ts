import { CreateSubscriptionInput } from "../shapes/CreateSubscriptionInput";
import { CreateSubscriptionOutput } from "../shapes/CreateSubscriptionOutput";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { ResourceAlreadyExistsException } from "../shapes/ResourceAlreadyExistsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
