import { _ConditionCheck } from "./_ConditionCheck";
import { _Put } from "./_Put";
import { _Delete } from "./_Delete";
import { _Update } from "./_Update";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TransactWriteItem: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ConditionCheck: {
      shape: _ConditionCheck
    },
    Put: {
      shape: _Put
    },
    Delete: {
      shape: _Delete
    },
    Update: {
      shape: _Update
    }
  }
};
