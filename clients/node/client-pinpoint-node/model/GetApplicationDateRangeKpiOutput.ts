import { _ApplicationDateRangeKpiResponse } from "./_ApplicationDateRangeKpiResponse";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetApplicationDateRangeKpiOutput: _Structure_ = {
  type: "structure",
  required: ["ApplicationDateRangeKpiResponse"],
  members: {
    ApplicationDateRangeKpiResponse: {
      shape: _ApplicationDateRangeKpiResponse
    }
  },
  payload: "ApplicationDateRangeKpiResponse"
};
