import { EnableDomainTransferLockInput } from "./EnableDomainTransferLockInput";
import { EnableDomainTransferLockOutput } from "./EnableDomainTransferLockOutput";
import { InvalidInput } from "./InvalidInput";
import { DuplicateRequest } from "./DuplicateRequest";
import { TLDRulesViolation } from "./TLDRulesViolation";
import { OperationLimitExceeded } from "./OperationLimitExceeded";
import { UnsupportedTLD } from "./UnsupportedTLD";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
