import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FileAccessLog: _Structure_ = {
  type: "structure",
  required: ["path"],
  members: {
    path: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
