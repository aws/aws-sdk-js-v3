import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ImportJobResource: _Structure_ = {
  type: "structure",
  required: ["Format", "S3Url", "RoleArn"],
  members: {
    DefineSegment: {
      shape: {
        type: "boolean"
      }
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
    RegisterEndpoints: {
      shape: {
        type: "boolean"
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
    SegmentId: {
      shape: {
        type: "string"
      }
    },
    SegmentName: {
      shape: {
        type: "string"
      }
    }
  }
};
