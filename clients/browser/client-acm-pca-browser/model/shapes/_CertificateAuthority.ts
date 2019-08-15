import { _CertificateAuthorityConfiguration } from "./_CertificateAuthorityConfiguration";
import { _RevocationConfiguration } from "./_RevocationConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CertificateAuthority: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Arn: {
      shape: {
        type: "string",
        min: 5
      }
    },
    CreatedAt: {
      shape: {
        type: "timestamp"
      }
    },
    LastStateChangeAt: {
      shape: {
        type: "timestamp"
      }
    },
    Type: {
      shape: {
        type: "string"
      }
    },
    Serial: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    NotBefore: {
      shape: {
        type: "timestamp"
      }
    },
    NotAfter: {
      shape: {
        type: "timestamp"
      }
    },
    FailureReason: {
      shape: {
        type: "string"
      }
    },
    CertificateAuthorityConfiguration: {
      shape: _CertificateAuthorityConfiguration
    },
    RevocationConfiguration: {
      shape: _RevocationConfiguration
    },
    RestorableUntil: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
