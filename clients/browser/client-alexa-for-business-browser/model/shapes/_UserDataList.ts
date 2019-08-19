import { List as _List_ } from "@aws-sdk/types";
import { _UserData } from "./_UserData";

export const _UserDataList: _List_ = {
  type: "list",
  member: {
    shape: _UserData
  }
};
