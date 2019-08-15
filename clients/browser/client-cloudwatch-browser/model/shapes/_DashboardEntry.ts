import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DashboardEntry: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DashboardName: {
      shape: {
        type: "string"
      }
    },
    DashboardArn: {
      shape: {
        type: "string"
      }
    },
    LastModified: {
      shape: {
        type: "timestamp"
      }
    },
    Size: {
      shape: {
        type: "integer"
      }
    }
  }
};
