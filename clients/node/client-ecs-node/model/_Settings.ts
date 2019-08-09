import { List as _List_ } from "@aws-sdk/types";
import { _Setting } from "./_Setting";

export const _Settings: _List_ = {
  type: "list",
  member: {
    shape: _Setting
  }
};
