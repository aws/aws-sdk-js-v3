import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ImportCertificateInput: _Structure_ = {
  type: "structure",
  required: ["CertificateIdentifier"],
  members: {
    CertificateIdentifier: {
      shape: {
        type: "string"
      }
    },
    CertificatePem: {
      shape: {
        type: "string"
      }
    },
    CertificateWallet: {
      shape: {
        type: "blob"
      }
    },
    Tags: {
      shape: _TagList
    }
  }
};
