import { _IndexNamesList } from "./_IndexNamesList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListIndicesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    indexNames: {
      shape: _IndexNamesList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
