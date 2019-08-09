import { FinalizeDeviceClaimInput } from "./FinalizeDeviceClaimInput";
import { FinalizeDeviceClaimOutput } from "./FinalizeDeviceClaimOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalFailureException } from "./InternalFailureException";
import { PreconditionFailedException } from "./PreconditionFailedException";
import { ResourceConflictException } from "./ResourceConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
