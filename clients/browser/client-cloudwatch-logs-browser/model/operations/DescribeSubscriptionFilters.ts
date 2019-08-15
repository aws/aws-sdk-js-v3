import { DescribeSubscriptionFiltersInput } from "../shapes/DescribeSubscriptionFiltersInput";
import { DescribeSubscriptionFiltersOutput } from "../shapes/DescribeSubscriptionFiltersOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeSubscriptionFilters: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeSubscriptionFilters",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeSubscriptionFiltersInput
  },
  output: {
    shape: DescribeSubscriptionFiltersOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
