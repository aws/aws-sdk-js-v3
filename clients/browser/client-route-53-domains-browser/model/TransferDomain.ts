import { TransferDomainInput } from "./TransferDomainInput";
import { TransferDomainOutput } from "./TransferDomainOutput";
import { InvalidInput } from "./InvalidInput";
import { UnsupportedTLD } from "./UnsupportedTLD";
import { DuplicateRequest } from "./DuplicateRequest";
import { TLDRulesViolation } from "./TLDRulesViolation";
import { DomainLimitExceeded } from "./DomainLimitExceeded";
import { OperationLimitExceeded } from "./OperationLimitExceeded";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const TransferDomain: _Operation_ = {
  metadata: ServiceMetadata,
  name: "TransferDomain",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: TransferDomainInput
  },
  output: {
    shape: TransferDomainOutput
  },
  errors: [
    {
      shape: InvalidInput
    },
    {
      shape: UnsupportedTLD
    },
    {
      shape: DuplicateRequest
    },
    {
      shape: TLDRulesViolation
    },
    {
      shape: DomainLimitExceeded
    },
    {
      shape: OperationLimitExceeded
    }
  ]
};
