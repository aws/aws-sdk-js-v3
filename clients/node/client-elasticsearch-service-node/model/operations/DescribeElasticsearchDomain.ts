import { DescribeElasticsearchDomainInput } from "../shapes/DescribeElasticsearchDomainInput";
import { DescribeElasticsearchDomainOutput } from "../shapes/DescribeElasticsearchDomainOutput";
import { BaseException } from "../shapes/BaseException";
import { InternalException } from "../shapes/InternalException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ValidationException } from "../shapes/ValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeElasticsearchDomain: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeElasticsearchDomain",
  http: {
    method: "GET",
    requestUri: "/2015-01-01/es/domain/{DomainName}"
  },
  input: {
    shape: DescribeElasticsearchDomainInput
  },
  output: {
    shape: DescribeElasticsearchDomainOutput
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
