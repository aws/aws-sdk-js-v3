import { _EC2InstanceCounts } from "./_EC2InstanceCounts";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FleetCapacity: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FleetId: {
      shape: {
        type: "string"
      }
    },
    InstanceType: {
      shape: {
        type: "string"
      }
    },
    InstanceCounts: {
      shape: _EC2InstanceCounts
    }
  }
};
