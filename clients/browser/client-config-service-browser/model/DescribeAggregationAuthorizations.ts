import { DescribeAggregationAuthorizationsInput } from "./DescribeAggregationAuthorizationsInput";
import { DescribeAggregationAuthorizationsOutput } from "./DescribeAggregationAuthorizationsOutput";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { InvalidLimitException } from "./InvalidLimitException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
