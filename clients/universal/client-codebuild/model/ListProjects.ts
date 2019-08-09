import { ListProjectsInput } from "./ListProjectsInput";
import { ListProjectsOutput } from "./ListProjectsOutput";
import { InvalidInputException } from "./InvalidInputException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListProjects: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListProjects",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListProjectsInput
  },
  output: {
    shape: ListProjectsOutput
  },
  errors: [
    {
      shape: InvalidInputException
    }
  ]
};
