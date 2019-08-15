import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RenderingError: _Structure_ = {
  type: "structure",
  required: ["Code", "Message"],
  members: {
    Code: {
      shape: {
        type: "string"
      }
    },
    Message: {
      shape: {
        type: "string"
      }
    }
  }
};
