import { DescribeReservedElasticsearchInstancesInput } from "../shapes/DescribeReservedElasticsearchInstancesInput";
import { DescribeReservedElasticsearchInstancesOutput } from "../shapes/DescribeReservedElasticsearchInstancesOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalException } from "../shapes/InternalException";
import { ValidationException } from "../shapes/ValidationException";
import { DisabledOperationException } from "../shapes/DisabledOperationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeReservedElasticsearchInstances: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeReservedElasticsearchInstances",
  http: {
    method: "GET",
    requestUri: "/2015-01-01/es/reservedInstances"
  },
  input: {
    shape: DescribeReservedElasticsearchInstancesInput
  },
  output: {
    shape: DescribeReservedElasticsearchInstancesOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InternalException
    },
    {
      shape: ValidationException
    },
    {
      shape: DisabledOperationException
    }
  ]
};
