import { _Parents } from "./_Parents";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListParentsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Parents: {
      shape: _Parents
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
