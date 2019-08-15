import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RegexPatternSetUpdate: _Structure_ = {
  type: "structure",
  required: ["Action", "RegexPatternString"],
  members: {
    Action: {
      shape: {
        type: "string"
      }
    },
    RegexPatternString: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
