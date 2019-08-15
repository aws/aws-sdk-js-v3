import { List as _List_ } from "@aws-sdk/types";
import { _DimensionKeyDescription } from "./_DimensionKeyDescription";

export const _DimensionKeyDescriptionList: _List_ = {
  type: "list",
  member: {
    shape: _DimensionKeyDescription
  }
};
