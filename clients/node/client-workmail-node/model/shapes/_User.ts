import { Structure as _Structure_ } from "@aws-sdk/types";

export const _User: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Id: {
      shape: {
        type: "string",
        min: 12
      }
    },
    Email: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Name: {
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
