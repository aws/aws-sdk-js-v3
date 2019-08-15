import { _InstanceGroupList } from "./_InstanceGroupList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListInstanceGroupsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    InstanceGroups: {
      shape: _InstanceGroupList
    },
    Marker: {
      shape: {
        type: "string"
      }
    }
  }
};
