import { _Expression } from "./_Expression";
import { _OptionStatus } from "./_OptionStatus";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ExpressionStatus: _Structure_ = {
  type: "structure",
  required: ["Options", "Status"],
  members: {
    Options: {
      shape: _Expression
    },
    Status: {
      shape: _OptionStatus
    }
  }
};
