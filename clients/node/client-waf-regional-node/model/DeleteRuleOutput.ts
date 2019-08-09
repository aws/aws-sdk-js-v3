import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteRuleOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ChangeToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
