import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ErrorDocument: _Structure_ = {
  type: "structure",
  required: ["Key"],
  members: {
    Key: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
