import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetCertificateInput: _Structure_ = {
  type: "structure",
  required: ["CertificateAuthorityArn", "CertificateArn"],
  members: {
    CertificateAuthorityArn: {
      shape: {
        type: "string",
        min: 5
      }
    },
    CertificateArn: {
      shape: {
        type: "string",
        min: 5
      }
    }
  }
};
