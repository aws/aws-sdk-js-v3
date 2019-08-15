import { _InstanceList } from "./_InstanceList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListInstancesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Instances: {
      shape: _InstanceList
    },
    Marker: {
      shape: {
        type: "string"
      }
    }
  }
};
