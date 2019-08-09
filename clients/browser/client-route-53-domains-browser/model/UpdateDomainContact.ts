import { UpdateDomainContactInput } from "./UpdateDomainContactInput";
import { UpdateDomainContactOutput } from "./UpdateDomainContactOutput";
import { InvalidInput } from "./InvalidInput";
import { DuplicateRequest } from "./DuplicateRequest";
import { TLDRulesViolation } from "./TLDRulesViolation";
import { OperationLimitExceeded } from "./OperationLimitExceeded";
import { UnsupportedTLD } from "./UnsupportedTLD";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateDomainContact: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateDomainContact",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateDomainContactInput
  },
  output: {
    shape: UpdateDomainContactOutput
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
