import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ComplianceContributorCount: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CappedCount: {
      shape: {
        type: "integer"
      }
    },
    CapExceeded: {
      shape: {
        type: "boolean"
      }
    }
  }
};
