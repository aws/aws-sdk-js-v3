import { List as _List_ } from "@aws-sdk/types";
import { _SigningProfile } from "./_SigningProfile";

export const _SigningProfiles: _List_ = {
  type: "list",
  member: {
    shape: _SigningProfile
  }
};
