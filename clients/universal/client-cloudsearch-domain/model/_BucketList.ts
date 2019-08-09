import { List as _List_ } from "@aws-sdk/types";
import { _Bucket } from "./_Bucket";

export const _BucketList: _List_ = {
  type: "list",
  member: {
    shape: _Bucket
  }
};
