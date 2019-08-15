import { UpdateDeviceStateInput } from "../shapes/UpdateDeviceStateInput";
import { UpdateDeviceStateOutput } from "../shapes/UpdateDeviceStateOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateDeviceState: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateDeviceState",
  http: {
    method: "PUT",
    requestUri: "/devices/{deviceId}/state"
  },
  input: {
    shape: UpdateDeviceStateInput
  },
  output: {
    shape: UpdateDeviceStateOutput
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
