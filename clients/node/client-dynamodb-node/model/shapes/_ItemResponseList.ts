import { List as _List_ } from "@aws-sdk/types";
import { _ItemResponse } from "./_ItemResponse";

export const _ItemResponseList: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _ItemResponse
  }
};
