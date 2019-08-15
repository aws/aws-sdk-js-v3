import { _Roots } from "./_Roots";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListRootsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Roots: {
      shape: _Roots
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
