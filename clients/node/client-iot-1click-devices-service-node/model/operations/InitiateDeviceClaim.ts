import { InitiateDeviceClaimInput } from "../shapes/InitiateDeviceClaimInput";
import { InitiateDeviceClaimOutput } from "../shapes/InitiateDeviceClaimOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ResourceConflictException } from "../shapes/ResourceConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
