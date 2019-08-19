import { ListJobsInput } from "../shapes/ListJobsInput";
import { ListJobsOutput } from "../shapes/ListJobsOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListJobs: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListJobs",
  http: {
    method: "GET",
    requestUri: "/v20180820/jobs"
  },
  input: {
    shape: ListJobsInput
  },
  output: {
    shape: ListJobsOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: InternalServiceException
    },
    {
      shape: InvalidNextTokenException
    }
  ]
};
