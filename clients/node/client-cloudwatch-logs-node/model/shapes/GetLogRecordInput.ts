import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetLogRecordInput: _Structure_ = {
  type: "structure",
  required: ["logRecordPointer"],
  members: {
    logRecordPointer: {
      shape: {
        type: "string"
      }
    }
  }
};
