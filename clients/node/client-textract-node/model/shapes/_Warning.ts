import { _Pages } from "./_Pages";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Warning: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ErrorCode: {
      shape: {
        type: "string"
      }
    },
    Pages: {
      shape: _Pages
    }
  }
};
