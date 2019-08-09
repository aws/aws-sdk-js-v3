import { InitiateDeviceClaimInput } from "./InitiateDeviceClaimInput";
import { InitiateDeviceClaimOutput } from "./InitiateDeviceClaimOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalFailureException } from "./InternalFailureException";
import { ResourceConflictException } from "./ResourceConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const InitiateDeviceClaim: _Operation_ = {
  metadata: ServiceMetadata,
  name: "InitiateDeviceClaim",
  http: {
    method: "PUT",
    requestUri: "/devices/{deviceId}/initiate-claim"
  },
  input: {
    shape: InitiateDeviceClaimInput
  },
  output: {
    shape: InitiateDeviceClaimOutput
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
    },
    {
      shape: ResourceConflictException
    }
  ]
};
