import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PatchBaselineIdentity: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BaselineId: {
      shape: {
        type: "string",
        min: 20
      }
    },
    BaselineName: {
      shape: {
        type: "string",
        min: 3
      }
    },
    OperatingSystem: {
      shape: {
        type: "string"
      }
    },
    BaselineDescription: {
      shape: {
        type: "string",
        min: 1
      }
    },
    DefaultBaseline: {
      shape: {
        type: "boolean"
      }
    }
  }
};
