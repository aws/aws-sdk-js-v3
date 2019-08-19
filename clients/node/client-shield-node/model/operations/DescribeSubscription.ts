import { DescribeSubscriptionInput } from "../shapes/DescribeSubscriptionInput";
import { DescribeSubscriptionOutput } from "../shapes/DescribeSubscriptionOutput";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeSubscription: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeSubscription",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeSubscriptionInput
  },
  output: {
    shape: DescribeSubscriptionOutput
  },
  errors: [
    {
      shape: InternalErrorException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
