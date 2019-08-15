import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PolicySummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PolicyArn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    PolicyId: {
      shape: {
        type: "string",
        min: 36
      }
    },
    PolicyName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ResourceType: {
      shape: {
        type: "string",
        min: 1
      }
    },
    SecurityServiceType: {
      shape: {
        type: "string"
      }
    },
    RemediationEnabled: {
      shape: {
        type: "boolean"
      }
    }
  }
};
