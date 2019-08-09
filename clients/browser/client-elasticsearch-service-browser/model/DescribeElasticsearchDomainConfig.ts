import { DescribeElasticsearchDomainConfigInput } from "./DescribeElasticsearchDomainConfigInput";
import { DescribeElasticsearchDomainConfigOutput } from "./DescribeElasticsearchDomainConfigOutput";
import { BaseException } from "./BaseException";
import { InternalException } from "./InternalException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ValidationException } from "./ValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
