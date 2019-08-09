import { List as _List_ } from "@aws-sdk/types";
import { _ElasticGpuSpecificationResponse } from "./_ElasticGpuSpecificationResponse";

export const _ElasticGpuSpecificationResponseList: _List_ = {
  type: "list",
  member: {
    shape: _ElasticGpuSpecificationResponse,
    locationName: "item"
  }
};
