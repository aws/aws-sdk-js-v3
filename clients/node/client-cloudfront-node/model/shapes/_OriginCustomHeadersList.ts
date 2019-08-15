import { List as _List_ } from "@aws-sdk/types";
import { _OriginCustomHeader } from "./_OriginCustomHeader";

export const _OriginCustomHeadersList: _List_ = {
  type: "list",
  member: {
    shape: _OriginCustomHeader,
    locationName: "OriginCustomHeader"
  }
};
