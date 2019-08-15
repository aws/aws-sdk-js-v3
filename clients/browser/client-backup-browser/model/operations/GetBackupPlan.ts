import { GetBackupPlanInput } from "../shapes/GetBackupPlanInput";
import { GetBackupPlanOutput } from "../shapes/GetBackupPlanOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { MissingParameterValueException } from "../shapes/MissingParameterValueException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetBackupPlan: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetBackupPlan",
  http: {
    method: "GET",
    requestUri: "/backup/plans/{backupPlanId}/"
  },
  input: {
    shape: GetBackupPlanInput
  },
  output: {
    shape: GetBackupPlanOutput
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
