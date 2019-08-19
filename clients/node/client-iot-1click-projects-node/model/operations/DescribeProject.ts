import { DescribeProjectInput } from "../shapes/DescribeProjectInput";
import { DescribeProjectOutput } from "../shapes/DescribeProjectOutput";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeProject: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeProject",
  http: {
    method: "GET",
    requestUri: "/projects/{projectName}"
  },
  input: {
    shape: DescribeProjectInput
  },
  output: {
    shape: DescribeProjectOutput
  },
  errors: [
    {
      shape: InternalFailureException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
