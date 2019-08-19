import { _BlockedIPRangeListType } from "./_BlockedIPRangeListType";
import { _SkippedIPRangeListType } from "./_SkippedIPRangeListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RiskExceptionConfigurationType: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BlockedIPRangeList: {
      shape: _BlockedIPRangeListType
    },
    SkippedIPRangeList: {
      shape: _SkippedIPRangeListType
    }
  }
};
