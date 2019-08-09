import { DescribeInstanceHealthInput } from "./DescribeInstanceHealthInput";
import { DescribeInstanceHealthOutput } from "./DescribeInstanceHealthOutput";
import { AccessPointNotFoundException } from "./AccessPointNotFoundException";
import { InvalidEndPointException } from "./InvalidEndPointException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
