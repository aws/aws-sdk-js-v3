import { List as _List_ } from "@aws-sdk/types";
import { _SecurityProfileTargetMapping } from "./_SecurityProfileTargetMapping";

export const _SecurityProfileTargetMappings: _List_ = {
  type: "list",
  member: {
    shape: _SecurityProfileTargetMapping
  }
};
