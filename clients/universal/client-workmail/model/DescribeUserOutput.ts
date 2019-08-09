import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeUserOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    UserId: {
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
    DisplayName: {
      shape: {
        type: "string"
      }
    },
    State: {
      shape: {
        type: "string"
      }
    },
    UserRole: {
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
