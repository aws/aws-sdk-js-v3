import { UndeploySystemInstanceInput } from "../shapes/UndeploySystemInstanceInput";
import { UndeploySystemInstanceOutput } from "../shapes/UndeploySystemInstanceOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
