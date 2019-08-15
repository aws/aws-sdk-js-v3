import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Device: _Structure_ = {
  type: "structure",
  required: ["ThingArn", "Id", "CertificateArn"],
  members: {
    CertificateArn: {
      shape: {
        type: "string"
      }
    },
    Id: {
      shape: {
        type: "string"
      }
    },
    SyncShadow: {
      shape: {
        type: "boolean"
      }
    },
    ThingArn: {
      shape: {
        type: "string"
      }
    }
  }
};
