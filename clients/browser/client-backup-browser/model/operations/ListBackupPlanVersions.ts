import { ListBackupPlanVersionsInput } from "../shapes/ListBackupPlanVersionsInput";
import { ListBackupPlanVersionsOutput } from "../shapes/ListBackupPlanVersionsOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { MissingParameterValueException } from "../shapes/MissingParameterValueException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
