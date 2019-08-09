import { List as _List_ } from "@aws-sdk/types";
import { _SigningPlatform } from "./_SigningPlatform";

export const _SigningPlatforms: _List_ = {
  type: "list",
  member: {
    shape: _SigningPlatform
  }
};
