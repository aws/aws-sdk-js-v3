import { _ResourceLocation } from "./_ResourceLocation";
import { _TagList } from "./_TagList";
import { _LoadBalancerTlsCertificateDomainValidationRecordList } from "./_LoadBalancerTlsCertificateDomainValidationRecordList";
import { _LoadBalancerTlsCertificateRenewalSummary } from "./_LoadBalancerTlsCertificateRenewalSummary";
import { _StringList } from "./_StringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LoadBalancerTlsCertificate: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    name: {
      shape: {
        type: "string"
      }
    },
    arn: {
      shape: {
        type: "string"
      }
    },
    supportCode: {
      shape: {
        type: "string"
      }
    },
    createdAt: {
      shape: {
        type: "timestamp"
      }
    },
    location: {
      shape: _ResourceLocation
    },
    resourceType: {
      shape: {
        type: "string"
      }
    },
    tags: {
      shape: _TagList
    },
    loadBalancerName: {
      shape: {
        type: "string"
      }
    },
    isAttached: {
      shape: {
        type: "boolean"
      }
    },
    status: {
      shape: {
        type: "string"
      }
    },
    domainName: {
      shape: {
        type: "string"
      }
    },
    domainValidationRecords: {
      shape: _LoadBalancerTlsCertificateDomainValidationRecordList
    },
    failureReason: {
      shape: {
        type: "string"
      }
    },
    issuedAt: {
      shape: {
        type: "timestamp"
      }
    },
    issuer: {
      shape: {
        type: "string"
      }
    },
    keyAlgorithm: {
      shape: {
        type: "string"
      }
    },
    notAfter: {
      shape: {
        type: "timestamp"
      }
    },
    notBefore: {
      shape: {
        type: "timestamp"
      }
    },
    renewalSummary: {
      shape: _LoadBalancerTlsCertificateRenewalSummary
    },
    revocationReason: {
      shape: {
        type: "string"
      }
    },
    revokedAt: {
      shape: {
        type: "timestamp"
      }
    },
    serial: {
      shape: {
        type: "string"
      }
    },
    signatureAlgorithm: {
      shape: {
        type: "string"
      }
    },
    subject: {
      shape: {
        type: "string"
      }
    },
    subjectAlternativeNames: {
      shape: _StringList
    }
  }
};
