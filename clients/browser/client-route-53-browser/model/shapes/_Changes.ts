import { List as _List_ } from "@aws-sdk/types";
import { _Change } from "./_Change";

export const _Changes: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _Change,
    locationName: "Change"
  }
};
