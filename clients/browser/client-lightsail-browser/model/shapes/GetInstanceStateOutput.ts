import { _InstanceState } from "./_InstanceState";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetInstanceStateOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    state: {
      shape: _InstanceState
    }
  }
};
