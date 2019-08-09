import { Structure as _Structure_ } from "@aws-sdk/types";

export const RestoreCertificateAuthorityInput: _Structure_ = {
  type: "structure",
  required: ["CertificateAuthorityArn"],
  members: {
    CertificateAuthorityArn: {
      shape: {
        type: "string",
        min: 5
      }
    }
  }
};
