import { List as _List_ } from "@aws-sdk/types";
import { _ReservedElasticsearchInstance } from "./_ReservedElasticsearchInstance";

export const _ReservedElasticsearchInstanceList: _List_ = {
  type: "list",
  member: {
    shape: _ReservedElasticsearchInstance
  }
};
