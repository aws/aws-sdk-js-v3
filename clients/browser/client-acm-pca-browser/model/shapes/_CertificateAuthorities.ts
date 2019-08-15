import { List as _List_ } from "@aws-sdk/types";
import { _CertificateAuthority } from "./_CertificateAuthority";

export const _CertificateAuthorities: _List_ = {
  type: "list",
  member: {
    shape: _CertificateAuthority
  }
};
