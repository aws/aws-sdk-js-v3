import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteAnalysisSchemeInput: _Structure_ = {
  type: "structure",
  required: ["DomainName", "AnalysisSchemeName"],
  members: {
    DomainName: {
      shape: {
        type: "string",
        min: 3
      }
    },
    AnalysisSchemeName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
