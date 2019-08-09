import { RenewDomainInput } from "./RenewDomainInput";
import { RenewDomainOutput } from "./RenewDomainOutput";
import { InvalidInput } from "./InvalidInput";
import { UnsupportedTLD } from "./UnsupportedTLD";
import { DuplicateRequest } from "./DuplicateRequest";
import { TLDRulesViolation } from "./TLDRulesViolation";
import { OperationLimitExceeded } from "./OperationLimitExceeded";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
