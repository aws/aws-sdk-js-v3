import { UndeprecateDomainInput } from "./UndeprecateDomainInput";
import { UndeprecateDomainOutput } from "./UndeprecateDomainOutput";
import { UnknownResourceFault } from "./UnknownResourceFault";
import { DomainAlreadyExistsFault } from "./DomainAlreadyExistsFault";
import { OperationNotPermittedFault } from "./OperationNotPermittedFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UndeprecateDomain: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UndeprecateDomain",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UndeprecateDomainInput
  },
  output: {
    shape: UndeprecateDomainOutput
  },
  errors: [
    {
      shape: UnknownResourceFault
    },
    {
      shape: DomainAlreadyExistsFault
    },
    {
      shape: OperationNotPermittedFault
    }
  ]
};
