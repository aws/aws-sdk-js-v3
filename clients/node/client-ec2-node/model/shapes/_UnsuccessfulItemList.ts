import { List as _List_ } from "@aws-sdk/types";
import { _UnsuccessfulItem } from "./_UnsuccessfulItem";

export const _UnsuccessfulItemList: _List_ = {
  type: "list",
  member: {
    shape: _UnsuccessfulItem,
    locationName: "item"
  }
};
