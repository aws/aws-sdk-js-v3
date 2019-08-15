import { List as _List_ } from "@aws-sdk/types";
import { _ResourcePathComponent } from "./_ResourcePathComponent";

export const _ResourcePathComponentList: _List_ = {
  type: "list",
  member: {
    shape: _ResourcePathComponent
  }
};
