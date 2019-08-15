import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RawString: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    content: {
      shape: {
        type: "string"
      }
    },
    sha256: {
      shape: {
        type: "string"
      }
    }
  }
};
