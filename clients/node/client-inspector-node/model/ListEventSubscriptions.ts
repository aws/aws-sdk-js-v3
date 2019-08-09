import { ListEventSubscriptionsInput } from "./ListEventSubscriptionsInput";
import { ListEventSubscriptionsOutput } from "./ListEventSubscriptionsOutput";
import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { AccessDeniedException } from "./AccessDeniedException";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListEventSubscriptions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListEventSubscriptions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListEventSubscriptionsInput
  },
  output: {
    shape: ListEventSubscriptionsOutput
  },
  errors: [
    {
      shape: InternalException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: AccessDeniedException
    },
    {
      shape: NoSuchEntityException
    }
  ]
};
