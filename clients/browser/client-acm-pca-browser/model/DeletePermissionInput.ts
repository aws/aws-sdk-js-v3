import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeletePermissionInput: _Structure_ = {
  type: "structure",
  required: ["CertificateAuthorityArn", "Principal"],
  members: {
    CertificateAuthorityArn: {
      shape: {
        type: "string",
        min: 5
      }
    },
    Principal: {
      shape: {
        type: "string"
      }
    },
    SourceAccount: {
      shape: {
        type: "string",
        min: 12
      }
    }
  }
};
