import { _ActionList } from "./_ActionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Permission: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CertificateAuthorityArn: {
      shape: {
        type: "string",
        min: 5
      }
    },
    CreatedAt: {
      shape: {
        type: "timestamp"
      }
    },
    Principal: {
      shape: {
        type: "string"
      }
    },
    SourceAccount: {
      shape: {
        type: "string"
      }
    },
    Actions: {
      shape: _ActionList
    },
    Policy: {
      shape: {
        type: "string"
      }
    }
  }
};
