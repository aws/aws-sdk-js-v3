import { _EBSOptions } from "./_EBSOptions";
import { _OptionStatus } from "./_OptionStatus";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EBSOptionsStatus: _Structure_ = {
  type: "structure",
  required: ["Options", "Status"],
  members: {
    Options: {
      shape: _EBSOptions
    },
    Status: {
      shape: _OptionStatus
    }
  }
};
