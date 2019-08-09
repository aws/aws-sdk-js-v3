import { List as _List_ } from "@aws-sdk/types";
import { _AccountDetails } from "./_AccountDetails";

export const _AccountDetailsList: _List_ = {
  type: "list",
  member: {
    shape: _AccountDetails
  }
};
