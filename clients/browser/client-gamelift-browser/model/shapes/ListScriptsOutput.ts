import { _ScriptList } from "./_ScriptList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListScriptsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Scripts: {
      shape: _ScriptList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
