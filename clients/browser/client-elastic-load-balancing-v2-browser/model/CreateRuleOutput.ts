import { _Rules } from "./_Rules";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateRuleOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Rules: {
      shape: _Rules
    }
  }
};
