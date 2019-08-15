import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Type: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    name: {
      shape: {
        type: "string"
      }
    },
    description: {
      shape: {
        type: "string"
      }
    },
    arn: {
      shape: {
        type: "string"
      }
    },
    definition: {
      shape: {
        type: "string"
      }
    },
    format: {
      shape: {
        type: "string"
      }
    }
  }
};
