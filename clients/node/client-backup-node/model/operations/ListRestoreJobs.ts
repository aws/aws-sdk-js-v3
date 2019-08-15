import { ListRestoreJobsInput } from "../shapes/ListRestoreJobsInput";
import { ListRestoreJobsOutput } from "../shapes/ListRestoreJobsOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { MissingParameterValueException } from "../shapes/MissingParameterValueException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
