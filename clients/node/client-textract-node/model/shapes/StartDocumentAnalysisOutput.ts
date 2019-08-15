import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartDocumentAnalysisOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    JobId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
