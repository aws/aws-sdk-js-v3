import { DescribeMetricFiltersInput } from "../shapes/DescribeMetricFiltersInput";
import { DescribeMetricFiltersOutput } from "../shapes/DescribeMetricFiltersOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
