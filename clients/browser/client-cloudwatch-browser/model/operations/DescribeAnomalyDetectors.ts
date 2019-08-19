import { DescribeAnomalyDetectorsInput } from "../shapes/DescribeAnomalyDetectorsInput";
import { DescribeAnomalyDetectorsOutput } from "../shapes/DescribeAnomalyDetectorsOutput";
import { InvalidNextToken } from "../shapes/InvalidNextToken";
import { InternalServiceFault } from "../shapes/InternalServiceFault";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeAnomalyDetectors: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeAnomalyDetectors",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeAnomalyDetectorsInput
  },
  output: {
    shape: DescribeAnomalyDetectorsOutput,
    resultWrapper: "DescribeAnomalyDetectorsResult"
  },
  errors: [
    {
      shape: InvalidNextToken
    },
    {
      shape: InternalServiceFault
    },
    {
      shape: InvalidParameterValueException
    }
  ]
};
