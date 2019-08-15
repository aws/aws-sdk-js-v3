import { List as _List_ } from "@aws-sdk/types";
import { _UserProfile } from "./_UserProfile";

export const _UserProfiles: _List_ = {
  type: "list",
  member: {
    shape: _UserProfile
  }
};
