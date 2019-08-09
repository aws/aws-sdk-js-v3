import { List as _List_ } from "@aws-sdk/types";
import { _CustomAmi } from "./_CustomAmi";

export const _CustomAmiList: _List_ = {
  type: "list",
  member: {
    shape: _CustomAmi
  }
};
