import { TransferDomainInput } from "../shapes/TransferDomainInput";
import { TransferDomainOutput } from "../shapes/TransferDomainOutput";
import { InvalidInput } from "../shapes/InvalidInput";
import { UnsupportedTLD } from "../shapes/UnsupportedTLD";
import { DuplicateRequest } from "../shapes/DuplicateRequest";
import { TLDRulesViolation } from "../shapes/TLDRulesViolation";
import { DomainLimitExceeded } from "../shapes/DomainLimitExceeded";
import { OperationLimitExceeded } from "../shapes/OperationLimitExceeded";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
