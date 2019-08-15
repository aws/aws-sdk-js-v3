import { UpdateProjectInput } from "../shapes/UpdateProjectInput";
import { UpdateProjectOutput } from "../shapes/UpdateProjectOutput";
import { ProjectNotFoundException } from "../shapes/ProjectNotFoundException";
import { ValidationException } from "../shapes/ValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateProject: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateProject",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateProjectInput
  },
  output: {
    shape: UpdateProjectOutput
  },
  errors: [
    {
      shape: ProjectNotFoundException
    },
    {
      shape: ValidationException
    }
  ]
};
