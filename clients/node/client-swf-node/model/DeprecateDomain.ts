import { DeprecateDomainInput } from "./DeprecateDomainInput";
import { DeprecateDomainOutput } from "./DeprecateDomainOutput";
import { UnknownResourceFault } from "./UnknownResourceFault";
import { DomainDeprecatedFault } from "./DomainDeprecatedFault";
import { OperationNotPermittedFault } from "./OperationNotPermittedFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
