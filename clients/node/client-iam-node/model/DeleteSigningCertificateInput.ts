import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteSigningCertificateInput: _Structure_ = {
  type: "structure",
  required: ["CertificateId"],
  members: {
    UserName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    CertificateId: {
      shape: {
        type: "string",
        min: 24
      }
    }
  }
};
