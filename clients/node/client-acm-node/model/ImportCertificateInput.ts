import { Structure as _Structure_ } from "@aws-sdk/types";

export const ImportCertificateInput: _Structure_ = {
  type: "structure",
  required: ["Certificate", "PrivateKey"],
  members: {
    CertificateArn: {
      shape: {
        type: "string",
        min: 20
      }
    },
    Certificate: {
      shape: {
        type: "blob"
      }
    },
    PrivateKey: {
      shape: {
        type: "blob",
        sensitive: true
      }
    },
    CertificateChain: {
      shape: {
        type: "blob"
      }
    }
  }
};
