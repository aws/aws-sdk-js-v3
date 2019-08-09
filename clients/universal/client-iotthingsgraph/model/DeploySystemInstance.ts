import { DeploySystemInstanceInput } from "./DeploySystemInstanceInput";
import { DeploySystemInstanceOutput } from "./DeploySystemInstanceOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { ResourceInUseException } from "./ResourceInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
