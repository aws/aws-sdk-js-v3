import { _LogBucketList } from "./_LogBucketList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeDRTAccessOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    RoleArn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    LogBucketList: {
      shape: _LogBucketList
    }
  }
};
