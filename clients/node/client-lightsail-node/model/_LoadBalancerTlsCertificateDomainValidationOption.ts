import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LoadBalancerTlsCertificateDomainValidationOption: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    domainName: {
      shape: {
        type: "string"
      }
    },
    validationStatus: {
      shape: {
        type: "string"
      }
    }
  }
};
