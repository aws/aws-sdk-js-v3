import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StackResourceDriftInformationSummary: _Structure_ = {
  type: "structure",
  required: ["StackResourceDriftStatus"],
  members: {
    StackResourceDriftStatus: {
      shape: {
        type: "string"
      }
    },
    LastCheckTimestamp: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
