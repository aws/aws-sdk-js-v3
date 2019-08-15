import { _InstanceList } from "./_InstanceList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetInstancesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    instances: {
      shape: _InstanceList
    },
    nextPageToken: {
      shape: {
        type: "string"
      }
    }
  }
};
