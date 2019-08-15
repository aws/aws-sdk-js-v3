import { List as _List_ } from "@aws-sdk/types";
import { _ReservedCacheNodesOffering } from "./_ReservedCacheNodesOffering";

export const _ReservedCacheNodesOfferingList: _List_ = {
  type: "list",
  member: {
    shape: _ReservedCacheNodesOffering,
    locationName: "ReservedCacheNodesOffering"
  }
};
