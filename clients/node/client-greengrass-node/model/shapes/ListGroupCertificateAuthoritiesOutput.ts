import { ___listOfGroupCertificateAuthorityProperties } from "./___listOfGroupCertificateAuthorityProperties";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListGroupCertificateAuthoritiesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    GroupCertificateAuthorities: {
      shape: ___listOfGroupCertificateAuthorityProperties
    }
  }
};
