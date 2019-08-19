import { _InstanceNameList } from "./_InstanceNameList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListOnPremisesInstancesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    instanceNames: {
      shape: _InstanceNameList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
