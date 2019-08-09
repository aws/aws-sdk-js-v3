import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteApplicationInput: _Structure_ = {
  type: "structure",
  required: ["ApplicationName", "CreateTimestamp"],
  members: {
    ApplicationName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    CreateTimestamp: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
