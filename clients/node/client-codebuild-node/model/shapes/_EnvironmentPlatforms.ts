import { List as _List_ } from "@aws-sdk/types";
import { _EnvironmentPlatform } from "./_EnvironmentPlatform";

export const _EnvironmentPlatforms: _List_ = {
  type: "list",
  member: {
    shape: _EnvironmentPlatform
  }
};
