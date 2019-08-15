import { _ConfigRule } from "./_ConfigRule";
import { _TagsList } from "./_TagsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutConfigRuleInput: _Structure_ = {
  type: "structure",
  required: ["ConfigRule"],
  members: {
    ConfigRule: {
      shape: _ConfigRule
    },
    Tags: {
      shape: _TagsList
    }
  }
};
