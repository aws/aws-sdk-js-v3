import { UpdateProjectInput } from "./UpdateProjectInput";
import { UpdateProjectOutput } from "./UpdateProjectOutput";
import { ProjectNotFoundException } from "./ProjectNotFoundException";
import { ValidationException } from "./ValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
