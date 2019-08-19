import { InitiateJobInput } from "../shapes/InitiateJobInput";
import { InitiateJobOutput } from "../shapes/InitiateJobOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { PolicyEnforcedException } from "../shapes/PolicyEnforcedException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { MissingParameterValueException } from "../shapes/MissingParameterValueException";
import { InsufficientCapacityException } from "../shapes/InsufficientCapacityException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const InitiateJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "InitiateJob",
  http: {
    method: "POST",
    requestUri: "/{accountId}/vaults/{vaultName}/jobs"
  },
  input: {
    shape: InitiateJobInput
  },
  output: {
    shape: InitiateJobOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: PolicyEnforcedException
    },
    {
      shape: InvalidParameterValueException
    },
    {
      shape: MissingParameterValueException
    },
    {
      shape: InsufficientCapacityException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
