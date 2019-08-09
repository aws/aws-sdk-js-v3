import { _ActionList } from "./_ActionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreatePermissionInput: _Structure_ = {
  type: "structure",
  required: ["CertificateAuthorityArn", "Principal", "Actions"],
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
    },
    Actions: {
      shape: _ActionList
    }
  }
};
