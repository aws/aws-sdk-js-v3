import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDashboardOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DashboardArn: {
      shape: {
        type: "string"
      }
    },
    DashboardBody: {
      shape: {
        type: "string"
      }
    },
    DashboardName: {
      shape: {
        type: "string"
      }
    }
  }
};
