import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Logger: _Structure_ = {
  type: "structure",
  required: ["Type", "Level", "Id", "Component"],
  members: {
    Component: {
      shape: {
        type: "string"
      }
    },
    Id: {
      shape: {
        type: "string"
      }
    },
    Level: {
      shape: {
        type: "string"
      }
    },
    Space: {
      shape: {
        type: "integer"
      }
    },
    Type: {
      shape: {
        type: "string"
      }
    }
  }
};
