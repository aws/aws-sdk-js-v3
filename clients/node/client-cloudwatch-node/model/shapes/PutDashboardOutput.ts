import { _DashboardValidationMessages } from "./_DashboardValidationMessages";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutDashboardOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DashboardValidationMessages: {
      shape: _DashboardValidationMessages
    }
  }
};
