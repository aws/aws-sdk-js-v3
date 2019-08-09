import { DescribeAnomalyDetectorsInput } from "./DescribeAnomalyDetectorsInput";
import { DescribeAnomalyDetectorsOutput } from "./DescribeAnomalyDetectorsOutput";
import { InvalidNextToken } from "./InvalidNextToken";
import { InternalServiceFault } from "./InternalServiceFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
