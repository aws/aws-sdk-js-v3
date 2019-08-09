import { GetBackupSelectionInput } from "./GetBackupSelectionInput";
import { GetBackupSelectionOutput } from "./GetBackupSelectionOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { MissingParameterValueException } from "./MissingParameterValueException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetBackupSelection: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetBackupSelection",
  http: {
    method: "GET",
    requestUri: "/backup/plans/{backupPlanId}/selections/{selectionId}"
  },
  input: {
    shape: GetBackupSelectionInput
  },
  output: {
    shape: GetBackupSelectionOutput
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
