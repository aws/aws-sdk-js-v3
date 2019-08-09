import { List as _List_ } from "@aws-sdk/types";
import { _ElasticInferenceAccelerator } from "./_ElasticInferenceAccelerator";

export const _ElasticInferenceAccelerators: _List_ = {
  type: "list",
  member: {
    shape: _ElasticInferenceAccelerator,
    locationName: "item"
  }
};
