import { List as _List_ } from "@aws-sdk/types";
import { _ProjectSourceVersion } from "./_ProjectSourceVersion";

export const _ProjectSecondarySourceVersions: _List_ = {
  type: "list",
  member: {
    shape: _ProjectSourceVersion
  }
};
