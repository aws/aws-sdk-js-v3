import { DescribeElasticsearchDomainsInput } from "./DescribeElasticsearchDomainsInput";
import { DescribeElasticsearchDomainsOutput } from "./DescribeElasticsearchDomainsOutput";
import { BaseException } from "./BaseException";
import { InternalException } from "./InternalException";
import { ValidationException } from "./ValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeElasticsearchDomains: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeElasticsearchDomains",
  http: {
    method: "POST",
    requestUri: "/2015-01-01/es/domain-info"
  },
  input: {
    shape: DescribeElasticsearchDomainsInput
  },
  output: {
    shape: DescribeElasticsearchDomainsOutput
  },
  errors: [
    {
      shape: BaseException
    },
    {
      shape: InternalException
    },
    {
      shape: ValidationException
    }
  ]
};
