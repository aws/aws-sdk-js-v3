import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FixedResponseActionConfig: _Structure_ = {
  type: "structure",
  required: ["StatusCode"],
  members: {
    MessageBody: {
      shape: {
        type: "string"
      }
    },
    StatusCode: {
      shape: {
        type: "string"
      }
    },
    ContentType: {
      shape: {
        type: "string"
      }
    }
  }
};
