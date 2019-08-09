import { DescribeConfigurationAggregatorsInput } from "./DescribeConfigurationAggregatorsInput";
import { DescribeConfigurationAggregatorsOutput } from "./DescribeConfigurationAggregatorsOutput";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { NoSuchConfigurationAggregatorException } from "./NoSuchConfigurationAggregatorException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { InvalidLimitException } from "./InvalidLimitException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
