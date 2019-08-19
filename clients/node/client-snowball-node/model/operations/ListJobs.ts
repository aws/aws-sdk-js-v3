import { ListJobsInput } from "../shapes/ListJobsInput";
import { ListJobsOutput } from "../shapes/ListJobsOutput";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListJobs: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListJobs",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListJobsInput
  },
  output: {
    shape: ListJobsOutput
  },
  errors: [
    {
      shape: InvalidNextTokenException
    }
  ]
};
