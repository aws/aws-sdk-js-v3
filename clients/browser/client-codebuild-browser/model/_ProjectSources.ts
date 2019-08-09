import { List as _List_ } from "@aws-sdk/types";
import { _ProjectSource } from "./_ProjectSource";

export const _ProjectSources: _List_ = {
  type: "list",
  member: {
    shape: _ProjectSource
  }
};
