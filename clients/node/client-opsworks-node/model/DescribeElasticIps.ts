import { DescribeElasticIpsInput } from "./DescribeElasticIpsInput";
import { DescribeElasticIpsOutput } from "./DescribeElasticIpsOutput";
import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeElasticIps: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeElasticIps",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeElasticIpsInput
  },
  output: {
    shape: DescribeElasticIpsOutput
  },
  errors: [
    {
      shape: ValidationException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
