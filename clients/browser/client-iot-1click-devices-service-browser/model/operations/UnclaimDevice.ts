import { UnclaimDeviceInput } from "../shapes/UnclaimDeviceInput";
import { UnclaimDeviceOutput } from "../shapes/UnclaimDeviceOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UnclaimDevice: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UnclaimDevice",
  http: {
    method: "PUT",
    requestUri: "/devices/{deviceId}/unclaim"
  },
  input: {
    shape: UnclaimDeviceInput
  },
  output: {
    shape: UnclaimDeviceOutput
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
