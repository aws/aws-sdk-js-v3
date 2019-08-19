import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LoadBalancerTlsCertificateDomainValidationRecord: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    name: {
      shape: {
        type: "string"
      }
    },
    type: {
      shape: {
        type: "string"
      }
    },
    value: {
      shape: {
        type: "string"
      }
    },
    validationStatus: {
      shape: {
        type: "string"
      }
    },
    domainName: {
      shape: {
        type: "string"
      }
    }
  }
};
