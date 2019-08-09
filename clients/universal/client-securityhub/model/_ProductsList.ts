import { List as _List_ } from "@aws-sdk/types";
import { _Product } from "./_Product";

export const _ProductsList: _List_ = {
  type: "list",
  member: {
    shape: _Product
  }
};
