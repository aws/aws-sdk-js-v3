import { List as _List_ } from "@aws-sdk/types";
import { _DataResource } from "./_DataResource";

export const _DataResources: _List_ = {
  type: "list",
  member: {
    shape: _DataResource
  }
};
