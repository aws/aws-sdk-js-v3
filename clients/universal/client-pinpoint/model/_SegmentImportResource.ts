import { _MapOf__integer } from "./_MapOf__integer";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SegmentImportResource: _Structure_ = {
  type: "structure",
  required: ["Format", "S3Url", "Size", "ExternalId", "RoleArn"],
  members: {
    ChannelCounts: {
      shape: _MapOf__integer
    },
    ExternalId: {
      shape: {
        type: "string"
      }
    },
    Format: {
      shape: {
        type: "string"
      }
    },
    RoleArn: {
      shape: {
        type: "string"
      }
    },
    S3Url: {
      shape: {
        type: "string"
      }
    },
    Size: {
      shape: {
        type: "integer"
      }
    }
  }
};
