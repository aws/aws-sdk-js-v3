import { _ReportDefinitionList } from "./_ReportDefinitionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeReportDefinitionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ReportDefinitions: {
      shape: _ReportDefinitionList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
