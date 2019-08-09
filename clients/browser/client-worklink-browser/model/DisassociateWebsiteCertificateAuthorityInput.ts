import { Structure as _Structure_ } from "@aws-sdk/types";

export const DisassociateWebsiteCertificateAuthorityInput: _Structure_ = {
  type: "structure",
  required: ["FleetArn", "WebsiteCaId"],
  members: {
    FleetArn: {
      shape: {
        type: "string",
        min: 20
      }
    },
    WebsiteCaId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
