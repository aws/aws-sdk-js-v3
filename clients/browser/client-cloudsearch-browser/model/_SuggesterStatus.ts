import { _Suggester } from "./_Suggester";
import { _OptionStatus } from "./_OptionStatus";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SuggesterStatus: _Structure_ = {
  type: "structure",
  required: ["Options", "Status"],
  members: {
    Options: {
      shape: _Suggester
    },
    Status: {
      shape: _OptionStatus
    }
  }
};
