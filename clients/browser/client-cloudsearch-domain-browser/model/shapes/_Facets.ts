import { Map as _Map_ } from "@aws-sdk/types";
import { _BucketInfo } from "./_BucketInfo";

export const _Facets: _Map_ = {
  type: "map",
  key: {
    shape: {
      type: "string"
    }
  },
  value: {
    shape: _BucketInfo
  }
};
