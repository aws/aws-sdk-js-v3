import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateSkillGroupInput: _Structure_ = {
  type: "structure",
  required: ["SkillGroupName"],
  members: {
    SkillGroupName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Description: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ClientRequestToken: {
      shape: {
        type: "string",
        min: 10
      }
    }
  }
};
