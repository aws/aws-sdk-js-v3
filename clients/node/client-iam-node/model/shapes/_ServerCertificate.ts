import { _ServerCertificateMetadata } from "./_ServerCertificateMetadata";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ServerCertificate: _Structure_ = {
  type: "structure",
  required: ["ServerCertificateMetadata", "CertificateBody"],
  members: {
    ServerCertificateMetadata: {
      shape: _ServerCertificateMetadata
    },
    CertificateBody: {
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
    }
  }
};
