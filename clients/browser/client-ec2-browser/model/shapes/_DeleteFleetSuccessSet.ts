import { List as _List_ } from "@aws-sdk/types";
import { _DeleteFleetSuccessItem } from "./_DeleteFleetSuccessItem";

export const _DeleteFleetSuccessSet: _List_ = {
  type: "list",
  member: {
    shape: _DeleteFleetSuccessItem,
    locationName: "item"
  }
};
