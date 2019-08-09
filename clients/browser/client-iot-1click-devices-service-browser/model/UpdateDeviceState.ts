import { UpdateDeviceStateInput } from "./UpdateDeviceStateInput";
import { UpdateDeviceStateOutput } from "./UpdateDeviceStateOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
