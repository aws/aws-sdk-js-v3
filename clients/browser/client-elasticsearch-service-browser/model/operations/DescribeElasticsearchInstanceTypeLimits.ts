import { DescribeElasticsearchInstanceTypeLimitsInput } from "../shapes/DescribeElasticsearchInstanceTypeLimitsInput";
import { DescribeElasticsearchInstanceTypeLimitsOutput } from "../shapes/DescribeElasticsearchInstanceTypeLimitsOutput";
import { BaseException } from "../shapes/BaseException";
import { InternalException } from "../shapes/InternalException";
import { InvalidTypeException } from "../shapes/InvalidTypeException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ValidationException } from "../shapes/ValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeElasticsearchInstanceTypeLimits: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeElasticsearchInstanceTypeLimits",
  http: {
    method: "GET",
    requestUri:
      "/2015-01-01/es/instanceTypeLimits/{ElasticsearchVersion}/{InstanceType}"
  },
  input: {
    shape: DescribeElasticsearchInstanceTypeLimitsInput
  },
  output: {
    shape: DescribeElasticsearchInstanceTypeLimitsOutput
  },
  errors: [
    {
      shape: BaseException
    },
    {
      shape: InternalException
    },
    {
      shape: InvalidTypeException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ValidationException
    }
  ]
};
