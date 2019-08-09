import { List as _List_ } from "@aws-sdk/types";
import { _TagDescription } from "./_TagDescription";

export const _TagDescriptionList: _List_ = {
  type: "list",
  member: {
    shape: _TagDescription,
    locationName: "item"
  }
};
