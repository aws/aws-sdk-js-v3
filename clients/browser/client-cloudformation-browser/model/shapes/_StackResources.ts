import { List as _List_ } from "@aws-sdk/types";
import { _StackResource } from "./_StackResource";

export const _StackResources: _List_ = {
  type: "list",
  member: {
    shape: _StackResource
  }
};
