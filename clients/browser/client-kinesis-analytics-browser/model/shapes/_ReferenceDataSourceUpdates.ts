import { List as _List_ } from "@aws-sdk/types";
import { _ReferenceDataSourceUpdate } from "./_ReferenceDataSourceUpdate";

export const _ReferenceDataSourceUpdates: _List_ = {
  type: "list",
  member: {
    shape: _ReferenceDataSourceUpdate
  }
};
