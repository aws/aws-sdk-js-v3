import { GetBackupSelectionInput } from "../shapes/GetBackupSelectionInput";
import { GetBackupSelectionOutput } from "../shapes/GetBackupSelectionOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { MissingParameterValueException } from "../shapes/MissingParameterValueException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
