import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListPipelinesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    nextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
