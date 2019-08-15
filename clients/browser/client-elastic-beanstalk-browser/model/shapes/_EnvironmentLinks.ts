import { List as _List_ } from "@aws-sdk/types";
import { _EnvironmentLink } from "./_EnvironmentLink";

export const _EnvironmentLinks: _List_ = {
  type: "list",
  member: {
    shape: _EnvironmentLink
  }
};
