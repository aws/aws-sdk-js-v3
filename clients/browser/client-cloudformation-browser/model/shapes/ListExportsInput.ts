import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListExportsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
