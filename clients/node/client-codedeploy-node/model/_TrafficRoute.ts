import { _ListenerArnList } from "./_ListenerArnList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TrafficRoute: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    listenerArns: {
      shape: _ListenerArnList
    }
  }
};
