import { Structure as _Structure_ } from "@aws-sdk/types";

export const NotifyApplicationStateInput: _Structure_ = {
  type: "structure",
  required: ["ApplicationId", "Status"],
  members: {
    ApplicationId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    DryRun: {
      shape: {
        type: "boolean"
      }
    }
  }
};
