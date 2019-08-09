import { ListBackupSelectionsInput } from "./ListBackupSelectionsInput";
import { ListBackupSelectionsOutput } from "./ListBackupSelectionsOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { MissingParameterValueException } from "./MissingParameterValueException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
