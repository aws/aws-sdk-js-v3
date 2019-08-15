import { _CertificateAuthority } from "./_CertificateAuthority";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeCertificateAuthorityOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CertificateAuthority: {
      shape: _CertificateAuthority
    }
  }
};
