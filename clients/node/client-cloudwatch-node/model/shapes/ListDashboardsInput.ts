import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListDashboardsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DashboardNamePrefix: {
      shape: {
        type: "string"
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
