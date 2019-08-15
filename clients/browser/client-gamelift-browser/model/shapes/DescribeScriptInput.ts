import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeScriptInput: _Structure_ = {
  type: "structure",
  required: ["ScriptId"],
  members: {
    ScriptId: {
      shape: {
        type: "string"
      }
    }
  }
};
