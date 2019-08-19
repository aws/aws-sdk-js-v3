import { _DatabaseInput } from "./_DatabaseInput";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateDatabaseInput: _Structure_ = {
  type: "structure",
  required: ["DatabaseInput"],
  members: {
    CatalogId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    DatabaseInput: {
      shape: _DatabaseInput
    }
  }
};
