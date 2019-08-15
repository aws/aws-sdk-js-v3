import { RegisterDomainInput } from "../shapes/RegisterDomainInput";
import { RegisterDomainOutput } from "../shapes/RegisterDomainOutput";
import { InvalidInput } from "../shapes/InvalidInput";
import { UnsupportedTLD } from "../shapes/UnsupportedTLD";
import { DuplicateRequest } from "../shapes/DuplicateRequest";
import { TLDRulesViolation } from "../shapes/TLDRulesViolation";
import { DomainLimitExceeded } from "../shapes/DomainLimitExceeded";
import { OperationLimitExceeded } from "../shapes/OperationLimitExceeded";
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
