import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ComplianceViolator: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ResourceId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ViolationReason: {
      shape: {
        type: "string"
      }
    },
    ResourceType: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
