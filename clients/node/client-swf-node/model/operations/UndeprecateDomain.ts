import { UndeprecateDomainInput } from "../shapes/UndeprecateDomainInput";
import { UndeprecateDomainOutput } from "../shapes/UndeprecateDomainOutput";
import { UnknownResourceFault } from "../shapes/UnknownResourceFault";
import { DomainAlreadyExistsFault } from "../shapes/DomainAlreadyExistsFault";
import { OperationNotPermittedFault } from "../shapes/OperationNotPermittedFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
