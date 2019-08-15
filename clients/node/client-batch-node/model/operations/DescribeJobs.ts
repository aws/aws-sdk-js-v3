import { DescribeJobsInput } from "../shapes/DescribeJobsInput";
import { DescribeJobsOutput } from "../shapes/DescribeJobsOutput";
import { ClientException } from "../shapes/ClientException";
import { ServerException } from "../shapes/ServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeJobs: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeJobs",
  http: {
    method: "POST",
    requestUri: "/v1/describejobs"
  },
  input: {
    shape: DescribeJobsInput
  },
  output: {
    shape: DescribeJobsOutput
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
