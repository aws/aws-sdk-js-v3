import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListPoliciesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Scope: {
      shape: {
        type: "string"
      }
    },
    OnlyAttached: {
      shape: {
        type: "boolean"
      }
    },
    PathPrefix: {
      shape: {
        type: "string",
        min: 1
      }
    },
    PolicyUsageFilter: {
      shape: {
        type: "string"
      }
    },
    Marker: {
      shape: {
        type: "string",
        min: 1
      }
    },
    MaxItems: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
