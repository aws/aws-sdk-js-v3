import { List as _List_ } from "@aws-sdk/types";
import { _ProductCode } from "./_ProductCode";

export const _ProductCodes: _List_ = {
  type: "list",
  member: {
    shape: _ProductCode
  }
};
