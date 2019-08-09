import { List as _List_ } from "@aws-sdk/types";
import { _SupportedPlatform } from "./_SupportedPlatform";

export const _SupportedPlatformsList: _List_ = {
  type: "list",
  member: {
    shape: _SupportedPlatform,
    locationName: "SupportedPlatform"
  }
};
