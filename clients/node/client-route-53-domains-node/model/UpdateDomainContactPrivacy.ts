import { UpdateDomainContactPrivacyInput } from "./UpdateDomainContactPrivacyInput";
import { UpdateDomainContactPrivacyOutput } from "./UpdateDomainContactPrivacyOutput";
import { InvalidInput } from "./InvalidInput";
import { DuplicateRequest } from "./DuplicateRequest";
import { TLDRulesViolation } from "./TLDRulesViolation";
import { OperationLimitExceeded } from "./OperationLimitExceeded";
import { UnsupportedTLD } from "./UnsupportedTLD";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
