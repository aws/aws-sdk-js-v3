import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyInstanceEventStartTimeInput: _Structure_ = {
  type: "structure",
  required: ["InstanceId", "InstanceEventId", "NotBefore"],
  members: {
    DryRun: {
      shape: {
        type: "boolean"
      }
    },
    InstanceId: {
      shape: {
        type: "string"
      }
    },
    InstanceEventId: {
      shape: {
        type: "string"
      }
    },
    NotBefore: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
