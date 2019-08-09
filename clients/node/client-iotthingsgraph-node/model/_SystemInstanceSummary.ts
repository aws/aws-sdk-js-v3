import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SystemInstanceSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    id: {
      shape: {
        type: "string"
      }
    },
    arn: {
      shape: {
        type: "string"
      }
    },
    status: {
      shape: {
        type: "string"
      }
    },
    target: {
      shape: {
        type: "string"
      }
    },
    greengrassGroupName: {
      shape: {
        type: "string"
      }
    },
    createdAt: {
      shape: {
        type: "timestamp"
      }
    },
    updatedAt: {
      shape: {
        type: "timestamp"
      }
    },
    greengrassGroupId: {
      shape: {
        type: "string"
      }
    },
    greengrassGroupVersionId: {
      shape: {
        type: "string"
      }
    }
  }
};
