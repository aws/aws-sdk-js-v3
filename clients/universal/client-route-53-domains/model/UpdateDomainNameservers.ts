import { UpdateDomainNameserversInput } from "./UpdateDomainNameserversInput";
import { UpdateDomainNameserversOutput } from "./UpdateDomainNameserversOutput";
import { InvalidInput } from "./InvalidInput";
import { DuplicateRequest } from "./DuplicateRequest";
import { TLDRulesViolation } from "./TLDRulesViolation";
import { OperationLimitExceeded } from "./OperationLimitExceeded";
import { UnsupportedTLD } from "./UnsupportedTLD";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
