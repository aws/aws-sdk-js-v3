import { _RangeList } from "./_RangeList";
import { _DoubleRangeList } from "./_DoubleRangeList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ValidStorageOptions: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    StorageType: {
      shape: {
        type: "string"
      }
    },
    StorageSize: {
      shape: _RangeList
    },
    ProvisionedIops: {
      shape: _RangeList
    },
    IopsToStorageRatio: {
      shape: _DoubleRangeList
    }
  }
};
