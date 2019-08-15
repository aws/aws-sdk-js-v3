import { Structure as _Structure_ } from "@aws-sdk/types";

export const UploadSigningCertificateInput: _Structure_ = {
  type: "structure",
  required: ["CertificateBody"],
  members: {
    UserName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    CertificateBody: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
