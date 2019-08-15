import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateSigningCertificateInput: _Structure_ = {
  type: "structure",
  required: ["CertificateId", "Status"],
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
    },
    Status: {
      shape: {
        type: "string"
      }
    }
  }
};
