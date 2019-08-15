import { _SnsTopics } from "./_SnsTopics";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const TestRoleInput: _Structure_ = {
  type: "structure",
  required: ["Role", "InputBucket", "OutputBucket", "Topics"],
  members: {
    Role: {
      shape: {
        type: "string"
      }
    },
    InputBucket: {
      shape: {
        type: "string"
      }
    },
    OutputBucket: {
      shape: {
        type: "string"
      }
    },
    Topics: {
      shape: _SnsTopics
    }
  }
};
