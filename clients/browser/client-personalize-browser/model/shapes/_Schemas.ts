import { List as _List_ } from "@aws-sdk/types";
import { _DatasetSchemaSummary } from "./_DatasetSchemaSummary";

export const _Schemas: _List_ = {
  type: "list",
  member: {
    shape: _DatasetSchemaSummary
  }
};
