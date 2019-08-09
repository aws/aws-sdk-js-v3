import { Structure as _Structure_ } from "@aws-sdk/types";

export const NotifyWhenUploadedInput: _Structure_ = {
  type: "structure",
  required: ["FileShareARN"],
  members: {
    FileShareARN: {
      shape: {
        type: "string",
        min: 50
      }
    }
  }
};
