import { _SubDomains } from "./_SubDomains";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DomainAssociation: _Structure_ = {
  type: "structure",
  required: [
    "domainAssociationArn",
    "domainName",
    "enableAutoSubDomain",
    "domainStatus",
    "statusReason",
    "subDomains"
  ],
  members: {
    domainAssociationArn: {
      shape: {
        type: "string"
      }
    },
    domainName: {
      shape: {
        type: "string"
      }
    },
    enableAutoSubDomain: {
      shape: {
        type: "boolean"
      }
    },
    domainStatus: {
      shape: {
        type: "string"
      }
    },
    statusReason: {
      shape: {
        type: "string"
      }
    },
    certificateVerificationDNSRecord: {
      shape: {
        type: "string"
      }
    },
    subDomains: {
      shape: _SubDomains
    }
  }
};
