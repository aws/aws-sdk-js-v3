import { _TableInput } from "./_TableInput";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateTableInput: _Structure_ = {
  type: "structure",
  required: ["DatabaseName", "TableInput"],
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
    TableInput: {
      shape: _TableInput
    }
  }
};
