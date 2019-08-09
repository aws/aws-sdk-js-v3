import { _AvailableInstanceCapacityList } from "./_AvailableInstanceCapacityList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AvailableCapacity: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AvailableInstanceCapacity: {
      shape: _AvailableInstanceCapacityList,
      locationName: "availableInstanceCapacity"
    },
    AvailableVCpus: {
      shape: {
        type: "integer"
      },
      locationName: "availableVCpus"
    }
  }
};
