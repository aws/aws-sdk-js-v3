import { _AliasList } from "./_AliasList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListAliasesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextMarker: {
      shape: {
        type: "string"
      }
    },
    Aliases: {
      shape: _AliasList
    }
  }
};
