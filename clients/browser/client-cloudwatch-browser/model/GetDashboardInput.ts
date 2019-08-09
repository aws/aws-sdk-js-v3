import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDashboardInput: _Structure_ = {
  type: "structure",
  required: ["DashboardName"],
  members: {
    DashboardName: {
      shape: {
        type: "string"
      }
    }
  }
};
