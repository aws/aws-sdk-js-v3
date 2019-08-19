import { DescribeCodeRepositoryInput } from "../shapes/DescribeCodeRepositoryInput";
import { DescribeCodeRepositoryOutput } from "../shapes/DescribeCodeRepositoryOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeCodeRepository: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeCodeRepository",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeCodeRepositoryInput
  },
  output: {
    shape: DescribeCodeRepositoryOutput
  },
  errors: []
};
