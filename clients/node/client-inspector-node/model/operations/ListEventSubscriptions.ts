import { ListEventSubscriptionsInput } from "../shapes/ListEventSubscriptionsInput";
import { ListEventSubscriptionsOutput } from "../shapes/ListEventSubscriptionsOutput";
import { InternalException } from "../shapes/InternalException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
