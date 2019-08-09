import { RegisterDomainInput } from "./RegisterDomainInput";
import { RegisterDomainOutput } from "./RegisterDomainOutput";
import { InvalidInput } from "./InvalidInput";
import { UnsupportedTLD } from "./UnsupportedTLD";
import { DuplicateRequest } from "./DuplicateRequest";
import { TLDRulesViolation } from "./TLDRulesViolation";
import { DomainLimitExceeded } from "./DomainLimitExceeded";
import { OperationLimitExceeded } from "./OperationLimitExceeded";
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
      shape: InvalidInput
    },
    {
      shape: UnsupportedTLD
    },
    {
      shape: DuplicateRequest
    },
    {
      shape: TLDRulesViolation
    },
    {
      shape: DomainLimitExceeded
    },
    {
      shape: OperationLimitExceeded
    }
  ]
};
