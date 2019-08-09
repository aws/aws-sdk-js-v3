import { ListSubscriptionsInput } from "./ListSubscriptionsInput";
import { ListSubscriptionsOutput } from "./ListSubscriptionsOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { InternalErrorException } from "./InternalErrorException";
import { AuthorizationErrorException } from "./AuthorizationErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
