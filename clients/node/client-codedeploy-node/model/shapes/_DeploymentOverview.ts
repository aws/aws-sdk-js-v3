import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DeploymentOverview: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Pending: {
      shape: {
        type: "integer"
      }
    },
    InProgress: {
      shape: {
        type: "integer"
      }
    },
    Succeeded: {
      shape: {
        type: "integer"
      }
    },
    Failed: {
      shape: {
        type: "integer"
      }
    },
    Skipped: {
      shape: {
        type: "integer"
      }
    },
    Ready: {
      shape: {
        type: "integer"
      }
    }
  }
};
