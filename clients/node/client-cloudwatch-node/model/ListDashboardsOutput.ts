import { _DashboardEntries } from "./_DashboardEntries";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListDashboardsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DashboardEntries: {
      shape: _DashboardEntries
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
