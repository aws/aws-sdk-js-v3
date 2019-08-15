import { _Command } from "./_Command";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SendCommandOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Command: {
      shape: _Command
    }
  }
};
