import { FinalizeDeviceClaimInput } from "../shapes/FinalizeDeviceClaimInput";
import { FinalizeDeviceClaimOutput } from "../shapes/FinalizeDeviceClaimOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { PreconditionFailedException } from "../shapes/PreconditionFailedException";
import { ResourceConflictException } from "../shapes/ResourceConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const FinalizeDeviceClaim: _Operation_ = {
  metadata: ServiceMetadata,
  name: "FinalizeDeviceClaim",
  http: {
    method: "PUT",
    requestUri: "/devices/{deviceId}/finalize-claim"
  },
  input: {
    shape: FinalizeDeviceClaimInput
  },
  output: {
    shape: FinalizeDeviceClaimOutput
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
      shape: PreconditionFailedException
    },
    {
      shape: ResourceConflictException
    }
  ]
};
