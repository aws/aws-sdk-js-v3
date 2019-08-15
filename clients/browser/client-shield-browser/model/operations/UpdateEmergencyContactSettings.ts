import { UpdateEmergencyContactSettingsInput } from "../shapes/UpdateEmergencyContactSettingsInput";
import { UpdateEmergencyContactSettingsOutput } from "../shapes/UpdateEmergencyContactSettingsOutput";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { OptimisticLockException } from "../shapes/OptimisticLockException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateEmergencyContactSettings: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateEmergencyContactSettings",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateEmergencyContactSettingsInput
  },
  output: {
    shape: UpdateEmergencyContactSettingsOutput
  },
  errors: [
    {
      shape: InternalErrorException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: OptimisticLockException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
