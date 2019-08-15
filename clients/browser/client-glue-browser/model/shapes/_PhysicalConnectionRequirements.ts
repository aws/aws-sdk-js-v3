import { _SecurityGroupIdList } from "./_SecurityGroupIdList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PhysicalConnectionRequirements: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SubnetId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    SecurityGroupIdList: {
      shape: _SecurityGroupIdList
    },
    AvailabilityZone: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
