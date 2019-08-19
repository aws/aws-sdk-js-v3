import { DescribeDomainsInput } from "../shapes/DescribeDomainsInput";
import { DescribeDomainsOutput } from "../shapes/DescribeDomainsOutput";
import { BaseException } from "../shapes/BaseException";
import { InternalException } from "../shapes/InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeDomains: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeDomains",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeDomainsInput
  },
  output: {
    shape: DescribeDomainsOutput,
    resultWrapper: "DescribeDomainsResult"
  },
  errors: [
    {
      shape: BaseException
    },
    {
      shape: InternalException
    }
  ]
};
