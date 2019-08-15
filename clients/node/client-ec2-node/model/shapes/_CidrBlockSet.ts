import { List as _List_ } from "@aws-sdk/types";
import { _CidrBlock } from "./_CidrBlock";

export const _CidrBlockSet: _List_ = {
  type: "list",
  member: {
    shape: _CidrBlock,
    locationName: "item"
  }
};
