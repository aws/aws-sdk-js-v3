import { _Script } from "./_Script";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateScriptOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Script: {
      shape: _Script
    }
  }
};
