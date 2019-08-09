import { _ResourceTypeValuesList } from "./_ResourceTypeValuesList";
import { _TargetTagList } from "./_TargetTagList";
import { _ScheduleList } from "./_ScheduleList";
import { _Parameters } from "./_Parameters";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PolicyDetails: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PolicyType: {
      shape: {
        type: "string"
      }
    },
    ResourceTypes: {
      shape: _ResourceTypeValuesList
    },
    TargetTags: {
      shape: _TargetTagList
    },
    Schedules: {
      shape: _ScheduleList
    },
    Parameters: {
      shape: _Parameters
    }
  }
};
