import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListAccountAliasesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Marker: {
      shape: {
        type: "string",
        min: 1
      }
    },
    MaxItems: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
