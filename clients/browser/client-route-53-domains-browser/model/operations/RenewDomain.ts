import { RenewDomainInput } from "../shapes/RenewDomainInput";
import { RenewDomainOutput } from "../shapes/RenewDomainOutput";
import { InvalidInput } from "../shapes/InvalidInput";
import { UnsupportedTLD } from "../shapes/UnsupportedTLD";
import { DuplicateRequest } from "../shapes/DuplicateRequest";
import { TLDRulesViolation } from "../shapes/TLDRulesViolation";
import { OperationLimitExceeded } from "../shapes/OperationLimitExceeded";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RenewDomain: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RenewDomain",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RenewDomainInput
  },
  output: {
    shape: RenewDomainOutput
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
      shape: OperationLimitExceeded
    }
  ]
};
