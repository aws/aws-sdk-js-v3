import { List as _List_ } from "@aws-sdk/types";
import { _NetworkProfile } from "./_NetworkProfile";

export const _NetworkProfiles: _List_ = {
  type: "list",
  member: {
    shape: _NetworkProfile
  }
};
