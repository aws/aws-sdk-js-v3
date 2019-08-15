import { DeleteBackupSelectionInput } from "../shapes/DeleteBackupSelectionInput";
import { DeleteBackupSelectionOutput } from "../shapes/DeleteBackupSelectionOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { MissingParameterValueException } from "../shapes/MissingParameterValueException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
