import { _BatchDeleteTableNameList } from "./_BatchDeleteTableNameList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchDeleteTableInput: _Structure_ = {
  type: "structure",
  required: ["DatabaseName", "TablesToDelete"],
  members: {
    CatalogId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    DatabaseName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    TablesToDelete: {
      shape: _BatchDeleteTableNameList
    }
  }
};
