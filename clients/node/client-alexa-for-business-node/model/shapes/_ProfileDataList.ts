import { List as _List_ } from "@aws-sdk/types";
import { _ProfileData } from "./_ProfileData";

export const _ProfileDataList: _List_ = {
  type: "list",
  member: {
    shape: _ProfileData
  }
};
