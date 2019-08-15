import { _ServiceQuota } from "./_ServiceQuota";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetAWSDefaultServiceQuotaOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Quota: {
      shape: _ServiceQuota
    }
  }
};
