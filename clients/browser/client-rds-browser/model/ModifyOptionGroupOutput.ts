import { _OptionGroup } from "./_OptionGroup";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyOptionGroupOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    OptionGroup: {
      shape: _OptionGroup
    }
  }
};
