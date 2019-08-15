import { Structure as _Structure_ } from "@aws-sdk/types";

export const AssociateDomainInput: _Structure_ = {
  type: "structure",
  required: ["FleetArn", "DomainName", "AcmCertificateArn"],
  members: {
    FleetArn: {
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
    DisplayName: {
      shape: {
        type: "string"
      }
    },
    AcmCertificateArn: {
      shape: {
        type: "string"
      }
    }
  }
};
