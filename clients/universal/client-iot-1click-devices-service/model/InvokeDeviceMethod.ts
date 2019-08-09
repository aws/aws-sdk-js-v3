import { InvokeDeviceMethodInput } from "./InvokeDeviceMethodInput";
import { InvokeDeviceMethodOutput } from "./InvokeDeviceMethodOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { PreconditionFailedException } from "./PreconditionFailedException";
import { InternalFailureException } from "./InternalFailureException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { RangeNotSatisfiableException } from "./RangeNotSatisfiableException";
import { ResourceConflictException } from "./ResourceConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
