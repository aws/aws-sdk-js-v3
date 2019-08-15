import { _Script } from "./_Script";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateScriptOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Script: {
      shape: _Script
    }
  }
};
