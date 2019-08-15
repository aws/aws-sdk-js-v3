import { _PathToObjectIdentifiersList } from "./_PathToObjectIdentifiersList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListObjectParentPathsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PathToObjectIdentifiersList: {
      shape: _PathToObjectIdentifiersList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
