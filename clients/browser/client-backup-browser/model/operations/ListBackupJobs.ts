import { ListBackupJobsInput } from "../shapes/ListBackupJobsInput";
import { ListBackupJobsOutput } from "../shapes/ListBackupJobsOutput";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListBackupJobs: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListBackupJobs",
  http: {
    method: "GET",
    requestUri: "/backup-jobs/"
  },
  input: {
    shape: ListBackupJobsInput
  },
  output: {
    shape: ListBackupJobsOutput
  },
  errors: [
    {
      shape: InvalidParameterValueException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
