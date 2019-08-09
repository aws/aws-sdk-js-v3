import { DescribeTargetHealthInput } from "./DescribeTargetHealthInput";
import { DescribeTargetHealthOutput } from "./DescribeTargetHealthOutput";
import { InvalidTargetException } from "./InvalidTargetException";
import { TargetGroupNotFoundException } from "./TargetGroupNotFoundException";
import { HealthUnavailableException } from "./HealthUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
