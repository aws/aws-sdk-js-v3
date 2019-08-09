import { _Values } from "./_Values";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Filter: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    Values: {
      shape: _Values
    }
  }
};
