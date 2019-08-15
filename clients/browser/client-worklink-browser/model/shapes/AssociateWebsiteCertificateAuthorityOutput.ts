import { Structure as _Structure_ } from "@aws-sdk/types";

export const AssociateWebsiteCertificateAuthorityOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    WebsiteCaId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
