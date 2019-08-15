import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ApplicationInfo: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ResourceGroupName: {
      shape: {
        type: "string"
      }
    },
    LifeCycle: {
      shape: {
        type: "string"
      }
    },
    Remarks: {
      shape: {
        type: "string"
      }
    }
  }
};
