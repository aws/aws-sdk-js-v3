import { _DeleteConnectionNameList } from "./_DeleteConnectionNameList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchDeleteConnectionInput: _Structure_ = {
  type: "structure",
  required: ["ConnectionNameList"],
  members: {
    CatalogId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ConnectionNameList: {
      shape: _DeleteConnectionNameList
    }
  }
};
