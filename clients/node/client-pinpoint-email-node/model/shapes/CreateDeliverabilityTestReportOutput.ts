import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateDeliverabilityTestReportOutput: _Structure_ = {
  type: "structure",
  required: ["ReportId", "DeliverabilityTestStatus"],
  members: {
    ReportId: {
      shape: {
        type: "string"
      }
    },
    DeliverabilityTestStatus: {
      shape: {
        type: "string"
      }
    }
  }
};
