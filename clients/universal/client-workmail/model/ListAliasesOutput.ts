import { _Aliases } from "./_Aliases";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListAliasesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Aliases: {
      shape: _Aliases
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
