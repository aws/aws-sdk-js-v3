import { _DashboardValidationMessages } from "./_DashboardValidationMessages";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DashboardInvalidInputError: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    message: {
      shape: {
        type: "string"
      }
    },
    dashboardValidationMessages: {
      shape: _DashboardValidationMessages
    }
  },
  exceptionType: "DashboardInvalidInputError",
  exceptionCode: "InvalidParameterInput"
};
