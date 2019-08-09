import { _ReviewResultDetailList } from "./_ReviewResultDetailList";
import { _ReviewActionDetailList } from "./_ReviewActionDetailList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ReviewReport: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ReviewResults: {
      shape: _ReviewResultDetailList
    },
    ReviewActions: {
      shape: _ReviewActionDetailList
    }
  }
};
