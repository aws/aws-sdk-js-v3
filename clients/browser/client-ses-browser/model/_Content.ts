import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Content: _Structure_ = {
  type: "structure",
  required: ["Data"],
  members: {
    Data: {
      shape: {
        type: "string"
      }
    },
    Charset: {
      shape: {
        type: "string"
      }
    }
  }
};
