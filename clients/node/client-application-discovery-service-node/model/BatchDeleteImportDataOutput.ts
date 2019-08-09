import { _BatchDeleteImportDataErrorList } from "./_BatchDeleteImportDataErrorList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchDeleteImportDataOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    errors: {
      shape: _BatchDeleteImportDataErrorList
    }
  }
};
