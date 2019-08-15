import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AccountModification: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ModificationState: {
      shape: {
        type: "string"
      }
    },
    DedicatedTenancySupport: {
      shape: {
        type: "string"
      }
    },
    DedicatedTenancyManagementCidrRange: {
      shape: {
        type: "string"
      }
    },
    StartTime: {
      shape: {
        type: "timestamp"
      }
    },
    ErrorCode: {
      shape: {
        type: "string"
      }
    },
    ErrorMessage: {
      shape: {
        type: "string"
      }
    }
  }
};
