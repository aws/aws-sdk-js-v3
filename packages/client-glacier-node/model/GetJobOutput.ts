import { GetJobOutputInput } from "./GetJobOutputInput";
import { GetJobOutputOutput } from "./GetJobOutputOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { MissingParameterValueException } from "./MissingParameterValueException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetJobOutput: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetJobOutput",
  http: {
    method: "GET",
    requestUri: "/{accountId}/vaults/{vaultName}/jobs/{jobId}/output"
  },
  input: {
    shape: GetJobOutputInput
  },
  output: {
    shape: GetJobOutputOutput
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
