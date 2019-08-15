import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDatabaseInput: _Structure_ = {
  type: "structure",
  required: ["Name"],
  members: {
    CatalogId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
