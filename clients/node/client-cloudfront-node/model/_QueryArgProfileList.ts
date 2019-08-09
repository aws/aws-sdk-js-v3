import { List as _List_ } from "@aws-sdk/types";
import { _QueryArgProfile } from "./_QueryArgProfile";

export const _QueryArgProfileList: _List_ = {
  type: "list",
  member: {
    shape: _QueryArgProfile,
    locationName: "QueryArgProfile"
  }
};
