import { DisableDomainTransferLockInput } from "../shapes/DisableDomainTransferLockInput";
import { DisableDomainTransferLockOutput } from "../shapes/DisableDomainTransferLockOutput";
import { InvalidInput } from "../shapes/InvalidInput";
import { DuplicateRequest } from "../shapes/DuplicateRequest";
import { TLDRulesViolation } from "../shapes/TLDRulesViolation";
import { OperationLimitExceeded } from "../shapes/OperationLimitExceeded";
import { UnsupportedTLD } from "../shapes/UnsupportedTLD";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
