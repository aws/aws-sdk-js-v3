import { Structure as _Structure_ } from "@aws-sdk/types";

export const ExportCertificateOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Certificate: {
      shape: {
        type: "string",
        min: 1
      }
    },
    CertificateChain: {
      shape: {
        type: "string",
        min: 1
      }
    },
    PrivateKey: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
      }
    }
  }
};
