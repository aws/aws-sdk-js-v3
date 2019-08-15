import { List as _List_ } from "@aws-sdk/types";
import { _PhoneNumberOrder } from "./_PhoneNumberOrder";

export const _PhoneNumberOrderList: _List_ = {
  type: "list",
  member: {
    shape: _PhoneNumberOrder
  }
};
