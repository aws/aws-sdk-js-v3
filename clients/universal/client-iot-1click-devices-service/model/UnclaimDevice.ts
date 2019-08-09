import { UnclaimDeviceInput } from "./UnclaimDeviceInput";
import { UnclaimDeviceOutput } from "./UnclaimDeviceOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
