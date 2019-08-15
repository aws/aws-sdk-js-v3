import { Structure as _Structure_ } from "@aws-sdk/types";

export const _OutputFileUriValue: _Structure_ = {
  type: "structure",
  required: ["fileName"],
  members: {
    fileName: {
      shape: {
        type: "string"
      }
    }
  }
};
