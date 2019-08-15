import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PatchComplianceData: _Structure_ = {
  type: "structure",
  required: [
    "Title",
    "KBId",
    "Classification",
    "Severity",
    "State",
    "InstalledTime"
  ],
  members: {
    Title: {
      shape: {
        type: "string"
      }
    },
    KBId: {
      shape: {
        type: "string"
      }
    },
    Classification: {
      shape: {
        type: "string"
      }
    },
    Severity: {
      shape: {
        type: "string"
      }
    },
    State: {
      shape: {
        type: "string"
      }
    },
    InstalledTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
