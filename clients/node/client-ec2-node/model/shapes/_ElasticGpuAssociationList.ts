import { List as _List_ } from "@aws-sdk/types";
import { _ElasticGpuAssociation } from "./_ElasticGpuAssociation";

export const _ElasticGpuAssociationList: _List_ = {
  type: "list",
  member: {
    shape: _ElasticGpuAssociation,
    locationName: "item"
  }
};
