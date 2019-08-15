import { List as _List_ } from "@aws-sdk/types";
import { _IdFormat } from "./_IdFormat";

export const _IdFormatList: _List_ = {
  type: "list",
  member: {
    shape: _IdFormat,
    locationName: "item"
  }
};
