import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetTagValuesInput: _Structure_ = {
  type: "structure",
  required: ["Key"],
  members: {
    PaginationToken: {
      shape: {
        type: "string"
      }
    },
    Key: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
