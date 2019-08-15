import { ListBackupSelectionsInput } from "../shapes/ListBackupSelectionsInput";
import { ListBackupSelectionsOutput } from "../shapes/ListBackupSelectionsOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { MissingParameterValueException } from "../shapes/MissingParameterValueException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListBackupSelections: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListBackupSelections",
  http: {
    method: "GET",
    requestUri: "/backup/plans/{backupPlanId}/selections/"
  },
  input: {
    shape: ListBackupSelectionsInput
  },
  output: {
    shape: ListBackupSelectionsOutput
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
