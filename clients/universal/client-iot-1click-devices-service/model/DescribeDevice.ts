import { DescribeDeviceInput } from "./DescribeDeviceInput";
import { DescribeDeviceOutput } from "./DescribeDeviceOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
