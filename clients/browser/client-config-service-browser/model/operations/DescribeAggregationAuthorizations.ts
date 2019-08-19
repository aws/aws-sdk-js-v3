import { DescribeAggregationAuthorizationsInput } from "../shapes/DescribeAggregationAuthorizationsInput";
import { DescribeAggregationAuthorizationsOutput } from "../shapes/DescribeAggregationAuthorizationsOutput";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { InvalidLimitException } from "../shapes/InvalidLimitException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeAggregationAuthorizations: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeAggregationAuthorizations",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeAggregationAuthorizationsInput
  },
  output: {
    shape: DescribeAggregationAuthorizationsOutput
  },
  errors: [
    {
      shape: InvalidParameterValueException
    },
    {
      shape: InvalidNextTokenException
    },
    {
      shape: InvalidLimitException
    }
  ]
};
