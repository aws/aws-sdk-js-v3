import { DescribeSubscriptionFiltersInput } from "./DescribeSubscriptionFiltersInput";
import { DescribeSubscriptionFiltersOutput } from "./DescribeSubscriptionFiltersOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
