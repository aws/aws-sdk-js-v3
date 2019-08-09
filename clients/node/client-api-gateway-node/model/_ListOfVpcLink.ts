import { List as _List_ } from "@aws-sdk/types";
import { _VpcLink } from "./_VpcLink";

export const _ListOfVpcLink: _List_ = {
  type: "list",
  member: {
    shape: _VpcLink
  }
};
