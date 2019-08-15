import { _IndexField } from "./_IndexField";
import { _OptionStatus } from "./_OptionStatus";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _IndexFieldStatus: _Structure_ = {
  type: "structure",
  required: ["Options", "Status"],
  members: {
    Options: {
      shape: _IndexField
    },
    Status: {
      shape: _OptionStatus
    }
  }
};
