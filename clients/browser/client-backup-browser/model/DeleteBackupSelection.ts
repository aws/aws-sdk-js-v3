import { DeleteBackupSelectionInput } from "./DeleteBackupSelectionInput";
import { DeleteBackupSelectionOutput } from "./DeleteBackupSelectionOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { MissingParameterValueException } from "./MissingParameterValueException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteBackupSelection: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteBackupSelection",
  http: {
    method: "DELETE",
    requestUri: "/backup/plans/{backupPlanId}/selections/{selectionId}"
  },
  input: {
    shape: DeleteBackupSelectionInput
  },
  output: {
    shape: DeleteBackupSelectionOutput
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
