import { _DashboardNames } from "./_DashboardNames";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteDashboardsInput: _Structure_ = {
  type: "structure",
  required: ["DashboardNames"],
  members: {
    DashboardNames: {
      shape: _DashboardNames
    }
  }
};
