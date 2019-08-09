import { _ToDeleteIdentifierList } from "./_ToDeleteIdentifierList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchDeleteImportDataInput: _Structure_ = {
  type: "structure",
  required: ["importTaskIds"],
  members: {
    importTaskIds: {
      shape: _ToDeleteIdentifierList
    }
  }
};
