import { DeleteSubscriptionFilterInput } from "./DeleteSubscriptionFilterInput";
import { DeleteSubscriptionFilterOutput } from "./DeleteSubscriptionFilterOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationAbortedException } from "./OperationAbortedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteSubscriptionFilter: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteSubscriptionFilter",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteSubscriptionFilterInput
  },
  output: {
    shape: DeleteSubscriptionFilterOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: OperationAbortedException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
