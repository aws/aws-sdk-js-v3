import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FlowExecutionSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    flowExecutionId: {
      shape: {
        type: "string"
      }
    },
    status: {
      shape: {
        type: "string"
      }
    },
    systemInstanceId: {
      shape: {
        type: "string"
      }
    },
    flowTemplateId: {
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
    }
  }
};
