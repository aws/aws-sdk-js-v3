import { _ObjectLockRetention } from "./_ObjectLockRetention";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetObjectRetentionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Retention: {
      shape: _ObjectLockRetention
    }
  },
  payload: "Retention"
};
