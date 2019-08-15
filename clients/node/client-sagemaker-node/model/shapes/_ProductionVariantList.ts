import { List as _List_ } from "@aws-sdk/types";
import { _ProductionVariant } from "./_ProductionVariant";

export const _ProductionVariantList: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _ProductionVariant
  }
};
