import { List as _List_ } from "@aws-sdk/types";
import { _Stage } from "./_Stage";

export const _ListOfStage: _List_ = {
  type: "list",
  member: {
    shape: _Stage
  }
};
