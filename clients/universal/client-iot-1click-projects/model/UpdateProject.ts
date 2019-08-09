import { UpdateProjectInput } from "./UpdateProjectInput";
import { UpdateProjectOutput } from "./UpdateProjectOutput";
import { InternalFailureException } from "./InternalFailureException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateProject: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateProject",
  http: {
    method: "PUT",
    requestUri: "/projects/{projectName}"
  },
  input: {
    shape: UpdateProjectInput
  },
  output: {
    shape: UpdateProjectOutput
  },
  errors: [
    {
      shape: InternalFailureException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
