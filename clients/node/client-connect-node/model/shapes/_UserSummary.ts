import { Structure as _Structure_ } from "@aws-sdk/types";

export const _UserSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Id: {
      shape: {
        type: "string"
      }
    },
    Arn: {
      shape: {
        type: "string"
      }
    },
    Username: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
