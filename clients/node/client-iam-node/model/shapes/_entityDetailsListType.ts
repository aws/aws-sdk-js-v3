import { List as _List_ } from "@aws-sdk/types";
import { _EntityDetails } from "./_EntityDetails";

export const _entityDetailsListType: _List_ = {
  type: "list",
  member: {
    shape: _EntityDetails
  }
};
