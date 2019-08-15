import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutDashboardInput: _Structure_ = {
  type: "structure",
  required: ["DashboardName", "DashboardBody"],
  members: {
    DashboardName: {
      shape: {
        type: "string"
      }
    },
    DashboardBody: {
      shape: {
        type: "string"
      }
    }
  }
};
