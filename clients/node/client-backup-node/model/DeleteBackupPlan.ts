import { DeleteBackupPlanInput } from "./DeleteBackupPlanInput";
import { DeleteBackupPlanOutput } from "./DeleteBackupPlanOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { MissingParameterValueException } from "./MissingParameterValueException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InvalidRequestException } from "./InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteBackupPlan: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteBackupPlan",
  http: {
    method: "DELETE",
    requestUri: "/backup/plans/{backupPlanId}"
  },
  input: {
    shape: DeleteBackupPlanInput
  },
  output: {
    shape: DeleteBackupPlanOutput
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
    },
    {
      shape: InvalidRequestException
    }
  ]
};
