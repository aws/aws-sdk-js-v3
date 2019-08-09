import { _InstanceState } from "./_InstanceState";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InstanceStateChange: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CurrentState: {
      shape: _InstanceState,
      locationName: "currentState"
    },
    InstanceId: {
      shape: {
        type: "string"
      },
      locationName: "instanceId"
    },
    PreviousState: {
      shape: _InstanceState,
      locationName: "previousState"
    }
  }
};
