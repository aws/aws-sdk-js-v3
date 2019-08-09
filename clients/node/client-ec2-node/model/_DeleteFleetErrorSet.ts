import { List as _List_ } from "@aws-sdk/types";
import { _DeleteFleetErrorItem } from "./_DeleteFleetErrorItem";

export const _DeleteFleetErrorSet: _List_ = {
  type: "list",
  member: {
    shape: _DeleteFleetErrorItem,
    locationName: "item"
  }
};
