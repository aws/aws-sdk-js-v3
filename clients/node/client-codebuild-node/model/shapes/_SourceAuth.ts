import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SourceAuth: _Structure_ = {
  type: "structure",
  required: ["type"],
  members: {
    type: {
      shape: {
        type: "string"
      }
    },
    resource: {
      shape: {
        type: "string"
      }
    }
  }
};
