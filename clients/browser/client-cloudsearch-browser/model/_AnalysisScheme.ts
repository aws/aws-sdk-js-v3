import { _AnalysisOptions } from "./_AnalysisOptions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AnalysisScheme: _Structure_ = {
  type: "structure",
  required: ["AnalysisSchemeName", "AnalysisSchemeLanguage"],
  members: {
    AnalysisSchemeName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    AnalysisSchemeLanguage: {
      shape: {
        type: "string"
      }
    },
    AnalysisOptions: {
      shape: _AnalysisOptions
    }
  }
};
