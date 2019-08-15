import { _InstancePortStateList } from "./_InstancePortStateList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetInstancePortStatesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    portStates: {
      shape: _InstancePortStateList
    }
  }
};
