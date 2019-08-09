import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SeveritySummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CriticalCount: {
      shape: {
        type: "integer"
      }
    },
    HighCount: {
      shape: {
        type: "integer"
      }
    },
    MediumCount: {
      shape: {
        type: "integer"
      }
    },
    LowCount: {
      shape: {
        type: "integer"
      }
    },
    InformationalCount: {
      shape: {
        type: "integer"
      }
    },
    UnspecifiedCount: {
      shape: {
        type: "integer"
      }
    }
  }
};
