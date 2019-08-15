import { UpdateBackupPlanInput } from "../shapes/UpdateBackupPlanInput";
import { UpdateBackupPlanOutput } from "../shapes/UpdateBackupPlanOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { MissingParameterValueException } from "../shapes/MissingParameterValueException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateBackupPlan: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateBackupPlan",
  http: {
    method: "POST",
    requestUri: "/backup/plans/{backupPlanId}"
  },
  input: {
    shape: UpdateBackupPlanInput
  },
  output: {
    shape: UpdateBackupPlanOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidParameterValueException
    },
    {
      shape: MissingParameterValueException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
