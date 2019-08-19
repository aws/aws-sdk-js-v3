import { List as _List_ } from "@aws-sdk/types";
import { _PhoneNumberError } from "./_PhoneNumberError";

export const _PhoneNumberErrorList: _List_ = {
  type: "list",
  member: {
    shape: _PhoneNumberError
  }
};
