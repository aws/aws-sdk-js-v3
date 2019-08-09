import { UpdateEmergencyContactSettingsInput } from "./UpdateEmergencyContactSettingsInput";
import { UpdateEmergencyContactSettingsOutput } from "./UpdateEmergencyContactSettingsOutput";
import { InternalErrorException } from "./InternalErrorException";
import { InvalidParameterException } from "./InvalidParameterException";
import { OptimisticLockException } from "./OptimisticLockException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
