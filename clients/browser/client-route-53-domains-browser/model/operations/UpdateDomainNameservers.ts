import { UpdateDomainNameserversInput } from "../shapes/UpdateDomainNameserversInput";
import { UpdateDomainNameserversOutput } from "../shapes/UpdateDomainNameserversOutput";
import { InvalidInput } from "../shapes/InvalidInput";
import { DuplicateRequest } from "../shapes/DuplicateRequest";
import { TLDRulesViolation } from "../shapes/TLDRulesViolation";
import { OperationLimitExceeded } from "../shapes/OperationLimitExceeded";
import { UnsupportedTLD } from "../shapes/UnsupportedTLD";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateDomainNameservers: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateDomainNameservers",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateDomainNameserversInput
  },
  output: {
    shape: UpdateDomainNameserversOutput
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
