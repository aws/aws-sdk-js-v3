import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UntagCertificateAuthorityInput: _Structure_ = {
  type: "structure",
  required: ["CertificateAuthorityArn", "Tags"],
  members: {
    CertificateAuthorityArn: {
      shape: {
        type: "string",
        min: 5
      }
    },
    Tags: {
      shape: _TagList
    }
  }
};
