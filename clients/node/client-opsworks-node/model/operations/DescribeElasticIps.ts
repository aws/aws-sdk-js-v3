import { DescribeElasticIpsInput } from "../shapes/DescribeElasticIpsInput";
import { DescribeElasticIpsOutput } from "../shapes/DescribeElasticIpsOutput";
import { ValidationException } from "../shapes/ValidationException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
