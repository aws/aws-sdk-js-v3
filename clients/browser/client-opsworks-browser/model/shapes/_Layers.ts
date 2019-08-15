import { List as _List_ } from "@aws-sdk/types";
import { _Layer } from "./_Layer";

export const _Layers: _List_ = {
  type: "list",
  member: {
    shape: _Layer
  }
};
