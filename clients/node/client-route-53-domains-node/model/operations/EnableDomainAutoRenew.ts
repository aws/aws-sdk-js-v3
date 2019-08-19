import { EnableDomainAutoRenewInput } from "../shapes/EnableDomainAutoRenewInput";
import { EnableDomainAutoRenewOutput } from "../shapes/EnableDomainAutoRenewOutput";
import { InvalidInput } from "../shapes/InvalidInput";
import { UnsupportedTLD } from "../shapes/UnsupportedTLD";
import { TLDRulesViolation } from "../shapes/TLDRulesViolation";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const EnableDomainAutoRenew: _Operation_ = {
  metadata: ServiceMetadata,
  name: "EnableDomainAutoRenew",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: EnableDomainAutoRenewInput
  },
  output: {
    shape: EnableDomainAutoRenewOutput
  },
  errors: [
    {
      shape: InvalidInput
    },
    {
      shape: UnsupportedTLD
    },
    {
      shape: TLDRulesViolation
    }
  ]
};
