import { UpdateDomainContactPrivacyInput } from "../shapes/UpdateDomainContactPrivacyInput";
import { UpdateDomainContactPrivacyOutput } from "../shapes/UpdateDomainContactPrivacyOutput";
import { InvalidInput } from "../shapes/InvalidInput";
import { DuplicateRequest } from "../shapes/DuplicateRequest";
import { TLDRulesViolation } from "../shapes/TLDRulesViolation";
import { OperationLimitExceeded } from "../shapes/OperationLimitExceeded";
import { UnsupportedTLD } from "../shapes/UnsupportedTLD";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateDomainContactPrivacy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateDomainContactPrivacy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateDomainContactPrivacyInput
  },
  output: {
    shape: UpdateDomainContactPrivacyOutput
  },
  errors: [
    {
      shape: InvalidInput
    },
    {
      shape: DuplicateRequest
    },
    {
      shape: TLDRulesViolation
    },
    {
      shape: OperationLimitExceeded
    },
    {
      shape: UnsupportedTLD
    }
  ]
};
