import { _PolicyDetails } from "./_PolicyDetails";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LifecyclePolicy: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PolicyId: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    State: {
      shape: {
        type: "string"
      }
    },
    ExecutionRoleArn: {
      shape: {
        type: "string"
      }
    },
    DateCreated: {
      shape: {
        type: "timestamp",
        timestampFormat: "iso8601"
      }
    },
    DateModified: {
      shape: {
        type: "timestamp",
        timestampFormat: "iso8601"
      }
    },
    PolicyDetails: {
      shape: _PolicyDetails
    }
  }
};
