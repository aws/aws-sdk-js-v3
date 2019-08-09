import { _Prompt } from "./_Prompt";
import { _Statement } from "./_Statement";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FollowUpPrompt: _Structure_ = {
  type: "structure",
  required: ["prompt", "rejectionStatement"],
  members: {
    prompt: {
      shape: _Prompt
    },
    rejectionStatement: {
      shape: _Statement
    }
  }
};
