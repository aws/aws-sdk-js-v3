import { _ImportFindingsErrorList } from "./_ImportFindingsErrorList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchImportFindingsOutput: _Structure_ = {
  type: "structure",
  required: ["FailedCount", "SuccessCount"],
  members: {
    FailedCount: {
      shape: {
        type: "integer"
      }
    },
    SuccessCount: {
      shape: {
        type: "integer"
      }
    },
    FailedFindings: {
      shape: _ImportFindingsErrorList
    }
  }
};
