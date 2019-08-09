import { BatchGetProjectsInput } from "./BatchGetProjectsInput";
import { BatchGetProjectsOutput } from "./BatchGetProjectsOutput";
import { InvalidInputException } from "./InvalidInputException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const BatchGetProjects: _Operation_ = {
  metadata: ServiceMetadata,
  name: "BatchGetProjects",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: BatchGetProjectsInput
  },
  output: {
    shape: BatchGetProjectsOutput
  },
  errors: [
    {
      shape: InvalidInputException
    }
  ]
};
