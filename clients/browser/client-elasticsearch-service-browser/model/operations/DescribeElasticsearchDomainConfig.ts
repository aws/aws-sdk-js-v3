import { DescribeElasticsearchDomainConfigInput } from "../shapes/DescribeElasticsearchDomainConfigInput";
import { DescribeElasticsearchDomainConfigOutput } from "../shapes/DescribeElasticsearchDomainConfigOutput";
import { BaseException } from "../shapes/BaseException";
import { InternalException } from "../shapes/InternalException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ValidationException } from "../shapes/ValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeElasticsearchDomainConfig: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeElasticsearchDomainConfig",
  http: {
    method: "GET",
    requestUri: "/2015-01-01/es/domain/{DomainName}/config"
  },
  input: {
    shape: DescribeElasticsearchDomainConfigInput
  },
  output: {
    shape: DescribeElasticsearchDomainConfigOutput
  },
  errors: [
    {
      shape: BaseException
    },
    {
      shape: InternalException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ValidationException
    }
  ]
};
