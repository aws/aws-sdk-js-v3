import { DescribeNamespaceInput } from "../shapes/DescribeNamespaceInput";
import { DescribeNamespaceOutput } from "../shapes/DescribeNamespaceOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeNamespace: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeNamespace",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeNamespaceInput
  },
  output: {
    shape: DescribeNamespaceOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: ThrottlingException
    }
  ]
};
