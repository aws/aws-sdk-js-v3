import { List as _List_ } from "@aws-sdk/types";
import { _UserPoolClientDescription } from "./_UserPoolClientDescription";

export const _UserPoolClientListType: _List_ = {
  type: "list",
  member: {
    shape: _UserPoolClientDescription
  }
};
