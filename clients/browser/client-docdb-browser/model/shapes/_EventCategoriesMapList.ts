import { List as _List_ } from "@aws-sdk/types";
import { _EventCategoriesMap } from "./_EventCategoriesMap";

export const _EventCategoriesMapList: _List_ = {
  type: "list",
  member: {
    shape: _EventCategoriesMap,
    locationName: "EventCategoriesMap"
  }
};
