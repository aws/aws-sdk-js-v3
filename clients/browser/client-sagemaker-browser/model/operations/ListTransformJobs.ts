import { ListTransformJobsInput } from "../shapes/ListTransformJobsInput";
import { ListTransformJobsOutput } from "../shapes/ListTransformJobsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListTransformJobs: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListTransformJobs",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListTransformJobsInput
  },
  output: {
    shape: ListTransformJobsOutput
  },
  errors: []
};
