import { DeploySystemInstanceInput } from "../shapes/DeploySystemInstanceInput";
import { DeploySystemInstanceOutput } from "../shapes/DeploySystemInstanceOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeploySystemInstance: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeploySystemInstance",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeploySystemInstanceInput
  },
  output: {
    shape: DeploySystemInstanceOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: ResourceInUseException
    }
  ]
};
