import { DescribeContactInput } from "../shapes/DescribeContactInput";
import { DescribeContactOutput } from "../shapes/DescribeContactOutput";
import { DependencyException } from "../shapes/DependencyException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
