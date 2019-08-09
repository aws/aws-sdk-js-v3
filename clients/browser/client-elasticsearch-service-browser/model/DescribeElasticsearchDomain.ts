import { DescribeElasticsearchDomainInput } from "./DescribeElasticsearchDomainInput";
import { DescribeElasticsearchDomainOutput } from "./DescribeElasticsearchDomainOutput";
import { BaseException } from "./BaseException";
import { InternalException } from "./InternalException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ValidationException } from "./ValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
