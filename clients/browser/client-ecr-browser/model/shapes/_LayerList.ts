import { List as _List_ } from "@aws-sdk/types";
import { _Layer } from "./_Layer";

export const _LayerList: _List_ = {
  type: "list",
  member: {
    shape: _Layer
  }
};
