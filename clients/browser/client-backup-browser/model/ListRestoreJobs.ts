import { ListRestoreJobsInput } from "./ListRestoreJobsInput";
import { ListRestoreJobsOutput } from "./ListRestoreJobsOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { MissingParameterValueException } from "./MissingParameterValueException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListRestoreJobs: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListRestoreJobs",
  http: {
    method: "GET",
    requestUri: "/restore-jobs/"
  },
  input: {
    shape: ListRestoreJobsInput
  },
  output: {
    shape: ListRestoreJobsOutput
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
