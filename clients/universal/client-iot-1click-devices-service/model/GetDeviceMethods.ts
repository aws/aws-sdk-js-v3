import { GetDeviceMethodsInput } from "./GetDeviceMethodsInput";
import { GetDeviceMethodsOutput } from "./GetDeviceMethodsOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
