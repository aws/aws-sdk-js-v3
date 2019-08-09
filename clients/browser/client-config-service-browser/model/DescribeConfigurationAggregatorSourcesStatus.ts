import { DescribeConfigurationAggregatorSourcesStatusInput } from "./DescribeConfigurationAggregatorSourcesStatusInput";
import { DescribeConfigurationAggregatorSourcesStatusOutput } from "./DescribeConfigurationAggregatorSourcesStatusOutput";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { NoSuchConfigurationAggregatorException } from "./NoSuchConfigurationAggregatorException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { InvalidLimitException } from "./InvalidLimitException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
