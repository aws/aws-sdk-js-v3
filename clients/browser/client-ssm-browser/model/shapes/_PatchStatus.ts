import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PatchStatus: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DeploymentStatus: {
      shape: {
        type: "string"
      }
    },
    ComplianceLevel: {
      shape: {
        type: "string"
      }
    },
    ApprovalDate: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
