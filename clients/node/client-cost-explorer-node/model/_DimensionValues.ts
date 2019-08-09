import { _Values } from "./_Values";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DimensionValues: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Key: {
      shape: {
        type: "string"
      }
    },
    Values: {
      shape: _Values
    }
  }
};
