import { DeprecateDomainInput } from "../shapes/DeprecateDomainInput";
import { DeprecateDomainOutput } from "../shapes/DeprecateDomainOutput";
import { UnknownResourceFault } from "../shapes/UnknownResourceFault";
import { DomainDeprecatedFault } from "../shapes/DomainDeprecatedFault";
import { OperationNotPermittedFault } from "../shapes/OperationNotPermittedFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeprecateDomain: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeprecateDomain",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeprecateDomainInput
  },
  output: {
    shape: DeprecateDomainOutput
  },
  errors: [
    {
      shape: UnknownResourceFault
    },
    {
      shape: DomainDeprecatedFault
    },
    {
      shape: OperationNotPermittedFault
    }
  ]
};
