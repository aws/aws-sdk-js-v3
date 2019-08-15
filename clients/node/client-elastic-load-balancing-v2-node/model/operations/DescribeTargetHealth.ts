import { DescribeTargetHealthInput } from "../shapes/DescribeTargetHealthInput";
import { DescribeTargetHealthOutput } from "../shapes/DescribeTargetHealthOutput";
import { InvalidTargetException } from "../shapes/InvalidTargetException";
import { TargetGroupNotFoundException } from "../shapes/TargetGroupNotFoundException";
import { HealthUnavailableException } from "../shapes/HealthUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeTargetHealth: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeTargetHealth",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeTargetHealthInput
  },
  output: {
    shape: DescribeTargetHealthOutput,
    resultWrapper: "DescribeTargetHealthResult"
  },
  errors: [
    {
      shape: InvalidTargetException
    },
    {
      shape: TargetGroupNotFoundException
    },
    {
      shape: HealthUnavailableException
    }
  ]
};
