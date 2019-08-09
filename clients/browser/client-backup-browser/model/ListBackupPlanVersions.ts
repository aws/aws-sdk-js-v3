import { ListBackupPlanVersionsInput } from "./ListBackupPlanVersionsInput";
import { ListBackupPlanVersionsOutput } from "./ListBackupPlanVersionsOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { MissingParameterValueException } from "./MissingParameterValueException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListBackupPlanVersions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListBackupPlanVersions",
  http: {
    method: "GET",
    requestUri: "/backup/plans/{backupPlanId}/versions/"
  },
  input: {
    shape: ListBackupPlanVersionsInput
  },
  output: {
    shape: ListBackupPlanVersionsOutput
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
