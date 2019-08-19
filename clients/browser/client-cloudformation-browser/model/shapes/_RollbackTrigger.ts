import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RollbackTrigger: _Structure_ = {
  type: "structure",
  required: ["Arn", "Type"],
  members: {
    Arn: {
      shape: {
        type: "string"
      }
    },
    Type: {
      shape: {
        type: "string"
      }
    }
  }
};
