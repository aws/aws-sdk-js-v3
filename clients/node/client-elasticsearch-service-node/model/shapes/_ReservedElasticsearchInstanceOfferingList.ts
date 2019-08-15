import { List as _List_ } from "@aws-sdk/types";
import { _ReservedElasticsearchInstanceOffering } from "./_ReservedElasticsearchInstanceOffering";

export const _ReservedElasticsearchInstanceOfferingList: _List_ = {
  type: "list",
  member: {
    shape: _ReservedElasticsearchInstanceOffering
  }
};
