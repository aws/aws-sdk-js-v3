import { DescribeElasticsearchInstanceTypeLimitsInput } from "./DescribeElasticsearchInstanceTypeLimitsInput";
import { DescribeElasticsearchInstanceTypeLimitsOutput } from "./DescribeElasticsearchInstanceTypeLimitsOutput";
import { BaseException } from "./BaseException";
import { InternalException } from "./InternalException";
import { InvalidTypeException } from "./InvalidTypeException";
import { LimitExceededException } from "./LimitExceededException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ValidationException } from "./ValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
