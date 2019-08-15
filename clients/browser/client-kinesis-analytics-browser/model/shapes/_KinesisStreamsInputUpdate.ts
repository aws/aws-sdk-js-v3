import { Structure as _Structure_ } from "@aws-sdk/types";

export const _KinesisStreamsInputUpdate: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ResourceARNUpdate: {
      shape: {
        type: "string",
        min: 1
      }
    },
    RoleARNUpdate: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
