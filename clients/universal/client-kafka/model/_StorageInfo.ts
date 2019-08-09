import { _EBSStorageInfo } from "./_EBSStorageInfo";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StorageInfo: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EbsStorageInfo: {
      shape: _EBSStorageInfo,
      locationName: "ebsStorageInfo"
    }
  }
};
