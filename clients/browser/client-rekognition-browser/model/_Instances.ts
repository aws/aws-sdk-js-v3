import { List as _List_ } from "@aws-sdk/types";
import { _Instance } from "./_Instance";

export const _Instances: _List_ = {
  type: "list",
  member: {
    shape: _Instance
  }
};
