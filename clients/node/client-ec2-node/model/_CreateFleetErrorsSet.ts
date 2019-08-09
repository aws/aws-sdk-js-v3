import { List as _List_ } from "@aws-sdk/types";
import { _CreateFleetError } from "./_CreateFleetError";

export const _CreateFleetErrorsSet: _List_ = {
  type: "list",
  member: {
    shape: _CreateFleetError,
    locationName: "item"
  }
};
