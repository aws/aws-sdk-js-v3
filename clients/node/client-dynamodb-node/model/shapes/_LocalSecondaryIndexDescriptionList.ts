import { List as _List_ } from "@aws-sdk/types";
import { _LocalSecondaryIndexDescription } from "./_LocalSecondaryIndexDescription";

export const _LocalSecondaryIndexDescriptionList: _List_ = {
  type: "list",
  member: {
    shape: _LocalSecondaryIndexDescription
  }
};
