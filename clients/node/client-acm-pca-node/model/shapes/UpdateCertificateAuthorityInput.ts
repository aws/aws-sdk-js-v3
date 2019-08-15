import { _RevocationConfiguration } from "./_RevocationConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateCertificateAuthorityInput: _Structure_ = {
  type: "structure",
  required: ["CertificateAuthorityArn"],
  members: {
    CertificateAuthorityArn: {
      shape: {
        type: "string",
        min: 5
      }
    },
    RevocationConfiguration: {
      shape: _RevocationConfiguration
    },
    Status: {
      shape: {
        type: "string"
      }
    }
  }
};
