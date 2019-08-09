import { List as _List_ } from "@aws-sdk/types";
import { _BootstrapActionDetail } from "./_BootstrapActionDetail";

export const _BootstrapActionDetailList: _List_ = {
  type: "list",
  member: {
    shape: _BootstrapActionDetail
  }
};
