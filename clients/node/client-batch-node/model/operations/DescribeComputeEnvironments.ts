import { DescribeComputeEnvironmentsInput } from "../shapes/DescribeComputeEnvironmentsInput";
import { DescribeComputeEnvironmentsOutput } from "../shapes/DescribeComputeEnvironmentsOutput";
import { ClientException } from "../shapes/ClientException";
import { ServerException } from "../shapes/ServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeComputeEnvironments: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeComputeEnvironments",
  http: {
    method: "POST",
    requestUri: "/v1/describecomputeenvironments"
  },
  input: {
    shape: DescribeComputeEnvironmentsInput
  },
  output: {
    shape: DescribeComputeEnvironmentsOutput
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
