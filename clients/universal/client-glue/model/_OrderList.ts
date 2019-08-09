import { List as _List_ } from "@aws-sdk/types";
import { _Order } from "./_Order";

export const _OrderList: _List_ = {
  type: "list",
  member: {
    shape: _Order
  }
};
