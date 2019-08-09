import { _SamplingRuleUpdate } from "./_SamplingRuleUpdate";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateSamplingRuleInput: _Structure_ = {
  type: "structure",
  required: ["SamplingRuleUpdate"],
  members: {
    SamplingRuleUpdate: {
      shape: _SamplingRuleUpdate
    }
  }
};
