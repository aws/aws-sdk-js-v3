import { _DomainList } from "./_DomainList";
import { _DomainValidationList } from "./_DomainValidationList";
import { _InUseList } from "./_InUseList";
import { _RenewalSummary } from "./_RenewalSummary";
import { _KeyUsageList } from "./_KeyUsageList";
import { _ExtendedKeyUsageList } from "./_ExtendedKeyUsageList";
import { _CertificateOptions } from "./_CertificateOptions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CertificateDetail: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CertificateArn: {
      shape: {
        type: "string",
        min: 20
      }
    },
    DomainName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    SubjectAlternativeNames: {
      shape: _DomainList
    },
    DomainValidationOptions: {
      shape: _DomainValidationList
    },
    Serial: {
      shape: {
        type: "string"
      }
    },
    Subject: {
      shape: {
        type: "string"
      }
    },
    Issuer: {
      shape: {
        type: "string"
      }
    },
    CreatedAt: {
      shape: {
        type: "timestamp"
      }
    },
    IssuedAt: {
      shape: {
        type: "timestamp"
      }
    },
    ImportedAt: {
      shape: {
        type: "timestamp"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    RevokedAt: {
      shape: {
        type: "timestamp"
      }
    },
    RevocationReason: {
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
    KeyAlgorithm: {
      shape: {
        type: "string"
      }
    },
    SignatureAlgorithm: {
      shape: {
        type: "string"
      }
    },
    InUseBy: {
      shape: _InUseList
    },
    FailureReason: {
      shape: {
        type: "string"
      }
    },
    Type: {
      shape: {
        type: "string"
      }
    },
    RenewalSummary: {
      shape: _RenewalSummary
    },
    KeyUsages: {
      shape: _KeyUsageList
    },
    ExtendedKeyUsages: {
      shape: _ExtendedKeyUsageList
    },
    CertificateAuthorityArn: {
      shape: {
        type: "string",
        min: 20
      }
    },
    RenewalEligibility: {
      shape: {
        type: "string"
      }
    },
    Options: {
      shape: _CertificateOptions
    }
  }
};
