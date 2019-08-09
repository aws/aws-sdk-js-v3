import { UpdateBackupPlanInput } from "./UpdateBackupPlanInput";
import { UpdateBackupPlanOutput } from "./UpdateBackupPlanOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { MissingParameterValueException } from "./MissingParameterValueException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
