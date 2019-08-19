import { ListProjectsInput } from "../shapes/ListProjectsInput";
import { ListProjectsOutput } from "../shapes/ListProjectsOutput";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListProjects: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListProjects",
  http: {
    method: "GET",
    requestUri: "/projects"
  },
  input: {
    shape: ListProjectsInput
  },
  output: {
    shape: ListProjectsOutput
  },
  errors: [
    {
      shape: InternalFailureException
    },
    {
      shape: InvalidRequestException
    }
  ]
};
