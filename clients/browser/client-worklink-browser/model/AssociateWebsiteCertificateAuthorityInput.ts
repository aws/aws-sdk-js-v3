import { Structure as _Structure_ } from "@aws-sdk/types";

export const AssociateWebsiteCertificateAuthorityInput: _Structure_ = {
  type: "structure",
  required: ["FleetArn", "Certificate"],
  members: {
    FleetArn: {
      shape: {
        type: "string",
        min: 20
      }
    },
    Certificate: {
      shape: {
        type: "string",
        min: 1
      }
    },
    DisplayName: {
      shape: {
        type: "string"
      }
    }
  }
};
