import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StackDriftInformationSummary: _Structure_ = {
  type: "structure",
  required: ["StackDriftStatus"],
  members: {
    StackDriftStatus: {
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
