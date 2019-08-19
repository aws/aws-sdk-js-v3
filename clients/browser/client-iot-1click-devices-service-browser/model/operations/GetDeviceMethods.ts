import { GetDeviceMethodsInput } from "../shapes/GetDeviceMethodsInput";
import { GetDeviceMethodsOutput } from "../shapes/GetDeviceMethodsOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetDeviceMethods: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetDeviceMethods",
  http: {
    method: "GET",
    requestUri: "/devices/{deviceId}/methods"
  },
  input: {
    shape: GetDeviceMethodsInput
  },
  output: {
    shape: GetDeviceMethodsOutput
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
