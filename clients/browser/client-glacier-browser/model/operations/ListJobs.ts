import { ListJobsInput } from "../shapes/ListJobsInput";
import { ListJobsOutput } from "../shapes/ListJobsOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { MissingParameterValueException } from "../shapes/MissingParameterValueException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListJobs: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListJobs",
  http: {
    method: "GET",
    requestUri: "/{accountId}/vaults/{vaultName}/jobs"
  },
  input: {
    shape: ListJobsInput
  },
  output: {
    shape: ListJobsOutput
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
