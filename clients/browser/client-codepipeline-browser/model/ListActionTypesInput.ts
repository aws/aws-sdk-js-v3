import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListActionTypesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    actionOwnerFilter: {
      shape: {
        type: "string"
      }
    },
    nextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
