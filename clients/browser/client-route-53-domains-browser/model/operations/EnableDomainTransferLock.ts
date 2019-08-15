import { EnableDomainTransferLockInput } from "../shapes/EnableDomainTransferLockInput";
import { EnableDomainTransferLockOutput } from "../shapes/EnableDomainTransferLockOutput";
import { InvalidInput } from "../shapes/InvalidInput";
import { DuplicateRequest } from "../shapes/DuplicateRequest";
import { TLDRulesViolation } from "../shapes/TLDRulesViolation";
import { OperationLimitExceeded } from "../shapes/OperationLimitExceeded";
import { UnsupportedTLD } from "../shapes/UnsupportedTLD";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const EnableDomainTransferLock: _Operation_ = {
  metadata: ServiceMetadata,
  name: "EnableDomainTransferLock",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: EnableDomainTransferLockInput
  },
  output: {
    shape: EnableDomainTransferLockOutput
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
