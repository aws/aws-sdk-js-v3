import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDeliverabilityTestReportInput: _Structure_ = {
  type: "structure",
  required: ["ReportId"],
  members: {
    ReportId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "ReportId"
    }
  }
};
