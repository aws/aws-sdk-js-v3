import { UndeploySystemInstanceInput } from "./UndeploySystemInstanceInput";
import { UndeploySystemInstanceOutput } from "./UndeploySystemInstanceOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceInUseException } from "./ResourceInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UndeploySystemInstance: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UndeploySystemInstance",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UndeploySystemInstanceInput
  },
  output: {
    shape: UndeploySystemInstanceOutput
  },
  errors: [
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
      shape: ResourceNotFoundException
    },
    {
      shape: ResourceInUseException
    }
  ]
};
