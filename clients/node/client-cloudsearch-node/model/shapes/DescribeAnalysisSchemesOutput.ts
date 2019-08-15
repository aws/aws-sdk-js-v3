import { _AnalysisSchemeStatusList } from "./_AnalysisSchemeStatusList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAnalysisSchemesOutput: _Structure_ = {
  type: "structure",
  required: ["AnalysisSchemes"],
  members: {
    AnalysisSchemes: {
      shape: _AnalysisSchemeStatusList
    }
  }
};
