import { List as _List_ } from "@aws-sdk/types";
import { _NetworkProfileData } from "./_NetworkProfileData";

export const _NetworkProfileDataList: _List_ = {
  type: "list",
  member: {
    shape: _NetworkProfileData
  }
};
