import { _CancelStepsInfoList } from "./_CancelStepsInfoList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CancelStepsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CancelStepsInfoList: {
      shape: _CancelStepsInfoList
    }
  }
};
