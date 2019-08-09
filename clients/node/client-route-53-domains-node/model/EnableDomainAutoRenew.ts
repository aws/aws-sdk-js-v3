import { EnableDomainAutoRenewInput } from "./EnableDomainAutoRenewInput";
import { EnableDomainAutoRenewOutput } from "./EnableDomainAutoRenewOutput";
import { InvalidInput } from "./InvalidInput";
import { UnsupportedTLD } from "./UnsupportedTLD";
import { TLDRulesViolation } from "./TLDRulesViolation";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
