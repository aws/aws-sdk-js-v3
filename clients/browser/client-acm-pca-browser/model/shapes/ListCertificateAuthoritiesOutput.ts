import { _CertificateAuthorities } from "./_CertificateAuthorities";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListCertificateAuthoritiesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CertificateAuthorities: {
      shape: _CertificateAuthorities
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
