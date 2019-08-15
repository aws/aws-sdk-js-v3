import { _BucketList } from "./_BucketList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BucketInfo: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    buckets: {
      shape: _BucketList
    }
  }
};
