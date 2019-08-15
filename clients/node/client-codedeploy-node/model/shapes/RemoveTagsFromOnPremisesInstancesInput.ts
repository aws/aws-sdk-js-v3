import { _TagList } from "./_TagList";
import { _InstanceNameList } from "./_InstanceNameList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RemoveTagsFromOnPremisesInstancesInput: _Structure_ = {
  type: "structure",
  required: ["tags", "instanceNames"],
  members: {
    tags: {
      shape: _TagList
    },
    instanceNames: {
      shape: _InstanceNameList
    }
  }
};
