import { _AnalysisScheme } from "./_AnalysisScheme";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DefineAnalysisSchemeInput: _Structure_ = {
  type: "structure",
  required: ["DomainName", "AnalysisScheme"],
  members: {
    DomainName: {
      shape: {
        type: "string",
        min: 3
      }
    },
    AnalysisScheme: {
      shape: _AnalysisScheme
    }
  }
};
