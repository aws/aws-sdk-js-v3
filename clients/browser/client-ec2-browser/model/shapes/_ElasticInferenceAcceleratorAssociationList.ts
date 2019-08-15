import { List as _List_ } from "@aws-sdk/types";
import { _ElasticInferenceAcceleratorAssociation } from "./_ElasticInferenceAcceleratorAssociation";

export const _ElasticInferenceAcceleratorAssociationList: _List_ = {
  type: "list",
  member: {
    shape: _ElasticInferenceAcceleratorAssociation,
    locationName: "item"
  }
};
