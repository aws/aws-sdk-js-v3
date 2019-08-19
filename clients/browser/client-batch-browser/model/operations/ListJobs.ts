import { ListJobsInput } from "../shapes/ListJobsInput";
import { ListJobsOutput } from "../shapes/ListJobsOutput";
import { ClientException } from "../shapes/ClientException";
import { ServerException } from "../shapes/ServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListJobs: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListJobs",
  http: {
    method: "POST",
    requestUri: "/v1/listjobs"
  },
  input: {
    shape: ListJobsInput
  },
  output: {
    shape: ListJobsOutput
  },
  errors: [
    {
      shape: ClientException
    },
    {
      shape: ServerException
    }
  ]
};
