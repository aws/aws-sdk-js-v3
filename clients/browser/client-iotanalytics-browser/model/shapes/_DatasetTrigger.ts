import { _Schedule } from "./_Schedule";
import { _TriggeringDataset } from "./_TriggeringDataset";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DatasetTrigger: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    schedule: {
      shape: _Schedule
    },
    dataset: {
      shape: _TriggeringDataset
    }
  }
};
