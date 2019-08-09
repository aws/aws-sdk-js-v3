import { Structure as _Structure_ } from "@aws-sdk/types";

export const ExportCertificateInput: _Structure_ = {
  type: "structure",
  required: ["CertificateArn", "Passphrase"],
  members: {
    CertificateArn: {
      shape: {
        type: "string",
        min: 20
      }
    },
    Passphrase: {
      shape: {
        type: "blob",
        sensitive: true
      }
    }
  }
};
