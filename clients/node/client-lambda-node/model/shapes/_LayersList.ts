import { List as _List_ } from "@aws-sdk/types";
import { _LayersListItem } from "./_LayersListItem";

export const _LayersList: _List_ = {
  type: "list",
  member: {
    shape: _LayersListItem
  }
};
