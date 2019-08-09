import { _AnalysisSchemeStatus } from "./_AnalysisSchemeStatus";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DefineAnalysisSchemeOutput: _Structure_ = {
  type: "structure",
  required: ["AnalysisScheme"],
  members: {
    AnalysisScheme: {
      shape: _AnalysisSchemeStatus
    }
  }
};
