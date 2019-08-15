import { _CertificateAuthorityConfiguration } from "./_CertificateAuthorityConfiguration";
import { _RevocationConfiguration } from "./_RevocationConfiguration";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateCertificateAuthorityInput: _Structure_ = {
  type: "structure",
  required: ["CertificateAuthorityConfiguration", "CertificateAuthorityType"],
  members: {
    CertificateAuthorityConfiguration: {
      shape: _CertificateAuthorityConfiguration
    },
    RevocationConfiguration: {
      shape: _RevocationConfiguration
    },
    CertificateAuthorityType: {
      shape: {
        type: "string"
      }
    },
    IdempotencyToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Tags: {
      shape: _TagList
    }
  }
};
