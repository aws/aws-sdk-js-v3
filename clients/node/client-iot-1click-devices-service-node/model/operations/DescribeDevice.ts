import { DescribeDeviceInput } from "../shapes/DescribeDeviceInput";
import { DescribeDeviceOutput } from "../shapes/DescribeDeviceOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeDevice: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeDevice",
  http: {
    method: "GET",
    requestUri: "/devices/{deviceId}"
  },
  input: {
    shape: DescribeDeviceInput
  },
  output: {
    shape: DescribeDeviceOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: InternalFailureException
    }
  ]
};
