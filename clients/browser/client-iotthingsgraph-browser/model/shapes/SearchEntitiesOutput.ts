import { _EntityDescriptions } from "./_EntityDescriptions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SearchEntitiesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    descriptions: {
      shape: _EntityDescriptions
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
