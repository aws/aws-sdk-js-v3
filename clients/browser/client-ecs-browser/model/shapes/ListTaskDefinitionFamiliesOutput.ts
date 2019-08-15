import { _StringList } from "./_StringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListTaskDefinitionFamiliesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    families: {
      shape: _StringList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
