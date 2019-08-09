import { List as _List_ } from "@aws-sdk/types";
import { _Audio } from "./_Audio";

export const _AudioList: _List_ = {
  type: "list",
  member: {
    shape: _Audio
  }
};
