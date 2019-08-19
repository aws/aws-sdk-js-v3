import { DescribeElasticsearchDomainsInput } from "../shapes/DescribeElasticsearchDomainsInput";
import { DescribeElasticsearchDomainsOutput } from "../shapes/DescribeElasticsearchDomainsOutput";
import { BaseException } from "../shapes/BaseException";
import { InternalException } from "../shapes/InternalException";
import { ValidationException } from "../shapes/ValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
