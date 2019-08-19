import { GetJobOutputInput } from "../shapes/GetJobOutputInput";
import { GetJobOutputOutput } from "../shapes/GetJobOutputOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { MissingParameterValueException } from "../shapes/MissingParameterValueException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
