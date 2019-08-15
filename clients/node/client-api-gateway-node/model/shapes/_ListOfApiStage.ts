import { List as _List_ } from "@aws-sdk/types";
import { _ApiStage } from "./_ApiStage";

export const _ListOfApiStage: _List_ = {
  type: "list",
  member: {
    shape: _ApiStage
  }
};
