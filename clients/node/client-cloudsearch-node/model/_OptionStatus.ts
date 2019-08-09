import { Structure as _Structure_ } from "@aws-sdk/types";

export const _OptionStatus: _Structure_ = {
  type: "structure",
  required: ["CreationDate", "UpdateDate", "State"],
  members: {
    CreationDate: {
      shape: {
        type: "timestamp"
      }
    },
    UpdateDate: {
      shape: {
        type: "timestamp"
      }
    },
    UpdateVersion: {
      shape: {
        type: "integer"
      }
    },
    State: {
      shape: {
        type: "string"
      }
    },
    PendingDeletion: {
      shape: {
        type: "boolean"
      }
    }
  }
};
