import { DescribeContactInput } from "./DescribeContactInput";
import { DescribeContactOutput } from "./DescribeContactOutput";
import { DependencyException } from "./DependencyException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeContact: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeContact",
  http: {
    method: "GET",
    requestUri: "/contact/{contactId}"
  },
  input: {
    shape: DescribeContactInput
  },
  output: {
    shape: DescribeContactOutput
  },
  errors: [
    {
      shape: DependencyException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
