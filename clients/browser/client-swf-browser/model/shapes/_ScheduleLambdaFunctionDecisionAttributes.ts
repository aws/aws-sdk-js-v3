import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ScheduleLambdaFunctionDecisionAttributes: _Structure_ = {
  type: "structure",
  required: ["id", "name"],
  members: {
    id: {
      shape: {
        type: "string",
        min: 1
      }
    },
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    control: {
      shape: {
        type: "string"
      }
    },
    input: {
      shape: {
        type: "string"
      }
    },
    startToCloseTimeout: {
      shape: {
        type: "string"
      }
    }
  }
};
