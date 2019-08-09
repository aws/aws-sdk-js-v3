import { _InstanceGroupModifyConfigList } from "./_InstanceGroupModifyConfigList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyInstanceGroupsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ClusterId: {
      shape: {
        type: "string"
      }
    },
    InstanceGroups: {
      shape: _InstanceGroupModifyConfigList
    }
  }
};
