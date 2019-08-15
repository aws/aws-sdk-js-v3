import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteCertificateInput: _Structure_ = {
  type: "structure",
  required: ["CertificateArn"],
  members: {
    CertificateArn: {
      shape: {
        type: "string"
      }
    }
  }
};
