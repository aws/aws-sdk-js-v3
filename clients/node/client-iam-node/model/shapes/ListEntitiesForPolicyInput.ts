import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListEntitiesForPolicyInput: _Structure_ = {
  type: "structure",
  required: ["PolicyArn"],
  members: {
    PolicyArn: {
      shape: {
        type: "string",
        min: 20
      }
    },
    EntityFilter: {
      shape: {
        type: "string"
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
