import { List as _List_ } from "@aws-sdk/types";
import { _StageKey } from "./_StageKey";

export const _ListOfStageKeys: _List_ = {
  type: "list",
  member: {
    shape: _StageKey
  }
};
