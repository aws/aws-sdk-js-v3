import { UpdateDomainContactInput } from "../shapes/UpdateDomainContactInput";
import { UpdateDomainContactOutput } from "../shapes/UpdateDomainContactOutput";
import { InvalidInput } from "../shapes/InvalidInput";
import { DuplicateRequest } from "../shapes/DuplicateRequest";
import { TLDRulesViolation } from "../shapes/TLDRulesViolation";
import { OperationLimitExceeded } from "../shapes/OperationLimitExceeded";
import { UnsupportedTLD } from "../shapes/UnsupportedTLD";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
