import { DeleteSubscriptionFilterInput } from "../shapes/DeleteSubscriptionFilterInput";
import { DeleteSubscriptionFilterOutput } from "../shapes/DeleteSubscriptionFilterOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationAbortedException } from "../shapes/OperationAbortedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
