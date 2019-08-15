import { _InstanceEntryList } from "./_InstanceEntryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateCloudFormationStackInput: _Structure_ = {
  type: "structure",
  required: ["instances"],
  members: {
    instances: {
      shape: _InstanceEntryList
    }
  }
};
