import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeGroupOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    GroupId: {
      shape: {
        type: "string",
        min: 12
      }
    },
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Email: {
      shape: {
        type: "string",
        min: 1
      }
    },
    State: {
      shape: {
        type: "string"
      }
    },
    EnabledDate: {
      shape: {
        type: "timestamp"
      }
    },
    DisabledDate: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
