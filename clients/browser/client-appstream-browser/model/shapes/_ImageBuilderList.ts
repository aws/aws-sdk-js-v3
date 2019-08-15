import { List as _List_ } from "@aws-sdk/types";
import { _ImageBuilder } from "./_ImageBuilder";

export const _ImageBuilderList: _List_ = {
  type: "list",
  member: {
    shape: _ImageBuilder
  }
};
