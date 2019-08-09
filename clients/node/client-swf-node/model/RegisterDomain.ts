import { RegisterDomainInput } from "./RegisterDomainInput";
import { RegisterDomainOutput } from "./RegisterDomainOutput";
import { DomainAlreadyExistsFault } from "./DomainAlreadyExistsFault";
import { LimitExceededFault } from "./LimitExceededFault";
import { OperationNotPermittedFault } from "./OperationNotPermittedFault";
import { TooManyTagsFault } from "./TooManyTagsFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RegisterDomain: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RegisterDomain",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RegisterDomainInput
  },
  output: {
    shape: RegisterDomainOutput
  },
  errors: [
    {
      shape: DomainAlreadyExistsFault
    },
    {
      shape: LimitExceededFault
    },
    {
      shape: OperationNotPermittedFault
    },
    {
      shape: TooManyTagsFault
    }
  ]
};
