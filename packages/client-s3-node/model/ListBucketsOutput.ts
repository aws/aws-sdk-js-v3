import { _Buckets } from "./_Buckets";
import { _Owner } from "./_Owner";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListBucketsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Buckets: {
      shape: _Buckets
    },
    Owner: {
      shape: _Owner
    }
  }
};
