import { DisableDomainTransferLockInput } from "./DisableDomainTransferLockInput";
import { DisableDomainTransferLockOutput } from "./DisableDomainTransferLockOutput";
import { InvalidInput } from "./InvalidInput";
import { DuplicateRequest } from "./DuplicateRequest";
import { TLDRulesViolation } from "./TLDRulesViolation";
import { OperationLimitExceeded } from "./OperationLimitExceeded";
import { UnsupportedTLD } from "./UnsupportedTLD";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DisableDomainTransferLock: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisableDomainTransferLock",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DisableDomainTransferLockInput
  },
  output: {
    shape: DisableDomainTransferLockOutput
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
