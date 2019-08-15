import { _AvailabilityZonesList } from "./_AvailabilityZonesList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ReshardingConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NodeGroupId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    PreferredAvailabilityZones: {
      shape: _AvailabilityZonesList
    }
  }
};
