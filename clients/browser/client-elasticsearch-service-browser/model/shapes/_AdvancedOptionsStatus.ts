import { _AdvancedOptions } from "./_AdvancedOptions";
import { _OptionStatus } from "./_OptionStatus";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AdvancedOptionsStatus: _Structure_ = {
  type: "structure",
  required: ["Options", "Status"],
  members: {
    Options: {
      shape: _AdvancedOptions
    },
    Status: {
      shape: _OptionStatus
    }
  }
};
