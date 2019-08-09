import { DescribeNamespaceInput } from "./DescribeNamespaceInput";
import { DescribeNamespaceOutput } from "./DescribeNamespaceOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalFailureException } from "./InternalFailureException";
import { ThrottlingException } from "./ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
