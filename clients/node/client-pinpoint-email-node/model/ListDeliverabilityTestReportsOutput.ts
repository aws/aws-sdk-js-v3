import { _DeliverabilityTestReports } from "./_DeliverabilityTestReports";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListDeliverabilityTestReportsOutput: _Structure_ = {
  type: "structure",
  required: ["DeliverabilityTestReports"],
  members: {
    DeliverabilityTestReports: {
      shape: _DeliverabilityTestReports
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
