import { DescribeReservedElasticsearchInstancesInput } from "./DescribeReservedElasticsearchInstancesInput";
import { DescribeReservedElasticsearchInstancesOutput } from "./DescribeReservedElasticsearchInstancesOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalException } from "./InternalException";
import { ValidationException } from "./ValidationException";
import { DisabledOperationException } from "./DisabledOperationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
