import { _ReportDefinition } from "./_ReportDefinition";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutReportDefinitionInput: _Structure_ = {
  type: "structure",
  required: ["ReportDefinition"],
  members: {
    ReportDefinition: {
      shape: _ReportDefinition
    }
  }
};
