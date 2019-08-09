import { List as _List_ } from "@aws-sdk/types";
import { _PhoneNumber } from "./_PhoneNumber";

export const _PhoneNumberList: _List_ = {
  type: "list",
  member: {
    shape: _PhoneNumber
  }
};
