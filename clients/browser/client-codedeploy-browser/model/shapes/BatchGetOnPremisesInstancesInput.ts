import { _InstanceNameList } from "./_InstanceNameList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchGetOnPremisesInstancesInput: _Structure_ = {
  type: "structure",
  required: ["instanceNames"],
  members: {
    instanceNames: {
      shape: _InstanceNameList
    }
  }
};
