import { _Things } from "./_Things";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SearchThingsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    things: {
      shape: _Things
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
