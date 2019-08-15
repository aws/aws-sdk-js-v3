import { DescribeConfigurationAggregatorsInput } from "../shapes/DescribeConfigurationAggregatorsInput";
import { DescribeConfigurationAggregatorsOutput } from "../shapes/DescribeConfigurationAggregatorsOutput";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { NoSuchConfigurationAggregatorException } from "../shapes/NoSuchConfigurationAggregatorException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { InvalidLimitException } from "../shapes/InvalidLimitException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeConfigurationAggregators: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeConfigurationAggregators",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeConfigurationAggregatorsInput
  },
  output: {
    shape: DescribeConfigurationAggregatorsOutput
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
