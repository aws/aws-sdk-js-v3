import { List as _List_ } from "@aws-sdk/types";
import { _ElasticGpus } from "./_ElasticGpus";

export const _ElasticGpuSet: _List_ = {
  type: "list",
  member: {
    shape: _ElasticGpus,
    locationName: "item"
  }
};
