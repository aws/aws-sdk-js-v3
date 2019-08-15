import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetTableInput: _Structure_ = {
  type: "structure",
  required: ["DatabaseName", "Name"],
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
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
