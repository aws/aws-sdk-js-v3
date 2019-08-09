import { _UserImportJobType } from "./_UserImportJobType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartUserImportJobOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    UserImportJob: {
      shape: _UserImportJobType
    }
  }
};
