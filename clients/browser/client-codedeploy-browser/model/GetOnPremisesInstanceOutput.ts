import { _InstanceInfo } from "./_InstanceInfo";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetOnPremisesInstanceOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    instanceInfo: {
      shape: _InstanceInfo
    }
  }
};
