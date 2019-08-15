import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DataSource: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Type: {
      shape: {
        type: "string"
      }
    },
    Arn: {
      shape: {
        type: "string"
      }
    },
    DatabaseName: {
      shape: {
        type: "string"
      }
    }
  }
};
