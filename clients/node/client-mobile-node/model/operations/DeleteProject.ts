import { DeleteProjectInput } from "../shapes/DeleteProjectInput";
import { DeleteProjectOutput } from "../shapes/DeleteProjectOutput";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { NotFoundException } from "../shapes/NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteProject: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteProject",
  http: {
    method: "DELETE",
    requestUri: "/projects/{projectId}"
  },
  input: {
    shape: DeleteProjectInput
  },
  output: {
    shape: DeleteProjectOutput
  },
  errors: [
    {
      shape: InternalFailureException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: NotFoundException
    }
  ]
};
