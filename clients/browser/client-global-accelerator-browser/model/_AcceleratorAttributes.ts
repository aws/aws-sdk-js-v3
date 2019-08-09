import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AcceleratorAttributes: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FlowLogsEnabled: {
      shape: {
        type: "boolean"
      }
    },
    FlowLogsS3Bucket: {
      shape: {
        type: "string"
      }
    },
    FlowLogsS3Prefix: {
      shape: {
        type: "string"
      }
    }
  }
};
