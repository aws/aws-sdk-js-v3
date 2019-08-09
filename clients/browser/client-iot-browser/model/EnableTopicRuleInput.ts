import { Structure as _Structure_ } from "@aws-sdk/types";

export const EnableTopicRuleInput: _Structure_ = {
  type: "structure",
  required: ["ruleName"],
  members: {
    ruleName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "ruleName"
    }
  }
};
