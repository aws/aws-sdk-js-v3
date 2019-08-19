import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Member: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Id: {
      shape: {
        type: "string"
      }
    },
    Name: {
      shape: {
        type: "string"
      }
    },
    Type: {
      shape: {
        type: "string"
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
