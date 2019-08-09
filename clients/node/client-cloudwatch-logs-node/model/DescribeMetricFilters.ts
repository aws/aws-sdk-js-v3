import { DescribeMetricFiltersInput } from "./DescribeMetricFiltersInput";
import { DescribeMetricFiltersOutput } from "./DescribeMetricFiltersOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeMetricFilters: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeMetricFilters",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeMetricFiltersInput
  },
  output: {
    shape: DescribeMetricFiltersOutput
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
