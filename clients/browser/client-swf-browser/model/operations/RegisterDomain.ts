import { RegisterDomainInput } from "../shapes/RegisterDomainInput";
import { RegisterDomainOutput } from "../shapes/RegisterDomainOutput";
import { DomainAlreadyExistsFault } from "../shapes/DomainAlreadyExistsFault";
import { LimitExceededFault } from "../shapes/LimitExceededFault";
import { OperationNotPermittedFault } from "../shapes/OperationNotPermittedFault";
import { TooManyTagsFault } from "../shapes/TooManyTagsFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
