import { _InstanceInfoList } from "./_InstanceInfoList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchGetOnPremisesInstancesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    instanceInfos: {
      shape: _InstanceInfoList
    }
  }
};
