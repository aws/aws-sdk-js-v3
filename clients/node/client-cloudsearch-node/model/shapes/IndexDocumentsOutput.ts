import { _FieldNameList } from "./_FieldNameList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const IndexDocumentsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FieldNames: {
      shape: _FieldNameList
    }
  }
};
