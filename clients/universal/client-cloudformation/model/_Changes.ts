import { List as _List_ } from "@aws-sdk/types";
import { _Change } from "./_Change";

export const _Changes: _List_ = {
  type: "list",
  member: {
    shape: _Change
  }
};
