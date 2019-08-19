import { DescribeJobInput } from "../shapes/DescribeJobInput";
import { DescribeJobOutput } from "../shapes/DescribeJobOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { MissingParameterValueException } from "../shapes/MissingParameterValueException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeJob",
  http: {
    method: "GET",
    requestUri: "/{accountId}/vaults/{vaultName}/jobs/{jobId}"
  },
  input: {
    shape: DescribeJobInput
  },
  output: {
    shape: DescribeJobOutput
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
