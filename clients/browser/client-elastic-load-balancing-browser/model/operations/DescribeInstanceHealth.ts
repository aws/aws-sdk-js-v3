import { DescribeInstanceHealthInput } from "../shapes/DescribeInstanceHealthInput";
import { DescribeInstanceHealthOutput } from "../shapes/DescribeInstanceHealthOutput";
import { AccessPointNotFoundException } from "../shapes/AccessPointNotFoundException";
import { InvalidEndPointException } from "../shapes/InvalidEndPointException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeInstanceHealth: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeInstanceHealth",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeInstanceHealthInput
  },
  output: {
    shape: DescribeInstanceHealthOutput,
    resultWrapper: "DescribeInstanceHealthResult"
  },
  errors: [
    {
      shape: AccessPointNotFoundException
    },
    {
      shape: InvalidEndPointException
    }
  ]
};
