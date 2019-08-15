import { List as _List_ } from "@aws-sdk/types";
import { _DataflowEndpointListItem } from "./_DataflowEndpointListItem";

export const _DataflowEndpointGroupList: _List_ = {
  type: "list",
  member: {
    shape: _DataflowEndpointListItem
  }
};
