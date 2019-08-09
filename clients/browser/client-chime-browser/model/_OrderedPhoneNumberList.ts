import { List as _List_ } from "@aws-sdk/types";
import { _OrderedPhoneNumber } from "./_OrderedPhoneNumber";

export const _OrderedPhoneNumberList: _List_ = {
  type: "list",
  member: {
    shape: _OrderedPhoneNumber
  }
};
