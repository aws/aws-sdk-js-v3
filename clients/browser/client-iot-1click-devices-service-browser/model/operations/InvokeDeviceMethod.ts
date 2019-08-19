import { InvokeDeviceMethodInput } from "../shapes/InvokeDeviceMethodInput";
import { InvokeDeviceMethodOutput } from "../shapes/InvokeDeviceMethodOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { PreconditionFailedException } from "../shapes/PreconditionFailedException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { RangeNotSatisfiableException } from "../shapes/RangeNotSatisfiableException";
import { ResourceConflictException } from "../shapes/ResourceConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const InvokeDeviceMethod: _Operation_ = {
  metadata: ServiceMetadata,
  name: "InvokeDeviceMethod",
  http: {
    method: "POST",
    requestUri: "/devices/{deviceId}/methods"
  },
  input: {
    shape: InvokeDeviceMethodInput
  },
  output: {
    shape: InvokeDeviceMethodOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: PreconditionFailedException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: RangeNotSatisfiableException
    },
    {
      shape: ResourceConflictException
    }
  ]
};
