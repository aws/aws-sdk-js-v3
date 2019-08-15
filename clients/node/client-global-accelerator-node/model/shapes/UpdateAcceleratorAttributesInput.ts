import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateAcceleratorAttributesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AcceleratorArn: {
      shape: {
        type: "string"
      }
    },
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
