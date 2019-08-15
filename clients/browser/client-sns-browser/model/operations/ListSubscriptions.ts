import { ListSubscriptionsInput } from "../shapes/ListSubscriptionsInput";
import { ListSubscriptionsOutput } from "../shapes/ListSubscriptionsOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { AuthorizationErrorException } from "../shapes/AuthorizationErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListSubscriptions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListSubscriptions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListSubscriptionsInput
  },
  output: {
    shape: ListSubscriptionsOutput,
    resultWrapper: "ListSubscriptionsResult"
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: InternalErrorException
    },
    {
      shape: AuthorizationErrorException
    }
  ]
};
