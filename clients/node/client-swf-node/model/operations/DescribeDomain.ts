import { DescribeDomainInput } from "../shapes/DescribeDomainInput";
import { DescribeDomainOutput } from "../shapes/DescribeDomainOutput";
import { UnknownResourceFault } from "../shapes/UnknownResourceFault";
import { OperationNotPermittedFault } from "../shapes/OperationNotPermittedFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeDomain: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeDomain",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeDomainInput
  },
  output: {
    shape: DescribeDomainOutput
  },
  errors: [
    {
      shape: UnknownResourceFault
    },
    {
      shape: OperationNotPermittedFault
    }
  ]
};
