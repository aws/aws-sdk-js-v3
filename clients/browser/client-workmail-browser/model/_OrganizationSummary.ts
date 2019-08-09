import { Structure as _Structure_ } from "@aws-sdk/types";

export const _OrganizationSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    OrganizationId: {
      shape: {
        type: "string"
      }
    },
    Alias: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ErrorMessage: {
      shape: {
        type: "string"
      }
    },
    State: {
      shape: {
        type: "string"
      }
    }
  }
};
