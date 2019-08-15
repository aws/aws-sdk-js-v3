import { DescribeConfigurationAggregatorSourcesStatusInput } from "../shapes/DescribeConfigurationAggregatorSourcesStatusInput";
import { DescribeConfigurationAggregatorSourcesStatusOutput } from "../shapes/DescribeConfigurationAggregatorSourcesStatusOutput";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { NoSuchConfigurationAggregatorException } from "../shapes/NoSuchConfigurationAggregatorException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { InvalidLimitException } from "../shapes/InvalidLimitException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeConfigurationAggregatorSourcesStatus: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeConfigurationAggregatorSourcesStatus",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeConfigurationAggregatorSourcesStatusInput
  },
  output: {
    shape: DescribeConfigurationAggregatorSourcesStatusOutput
  },
  errors: [
    {
      shape: InvalidParameterValueException
    },
    {
      shape: NoSuchConfigurationAggregatorException
    },
    {
      shape: InvalidNextTokenException
    },
    {
      shape: InvalidLimitException
    }
  ]
};
