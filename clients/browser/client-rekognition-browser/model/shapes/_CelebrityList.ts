import { List as _List_ } from "@aws-sdk/types";
import { _Celebrity } from "./_Celebrity";

export const _CelebrityList: _List_ = {
  type: "list",
  member: {
    shape: _Celebrity
  }
};
