import { List as _List_ } from "@aws-sdk/types";
import { _ImageDetail } from "./_ImageDetail";

export const _ImageDetailList: _List_ = {
  type: "list",
  member: {
    shape: _ImageDetail
  }
};
