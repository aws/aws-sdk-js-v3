import { List as _List_ } from "@aws-sdk/types";
import { _ContactData } from "./_ContactData";

export const _ContactDataList: _List_ = {
  type: "list",
  member: {
    shape: _ContactData
  }
};
