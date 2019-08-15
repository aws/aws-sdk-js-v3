import { List as _List_ } from "@aws-sdk/types";
import { _LayerVersionsListItem } from "./_LayerVersionsListItem";

export const _LayerVersionsList: _List_ = {
  type: "list",
  member: {
    shape: _LayerVersionsListItem
  }
};
