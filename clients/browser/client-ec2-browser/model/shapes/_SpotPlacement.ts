import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SpotPlacement: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AvailabilityZone: {
      shape: {
        type: "string"
      },
      locationName: "availabilityZone"
    },
    GroupName: {
      shape: {
        type: "string"
      },
      locationName: "groupName"
    },
    Tenancy: {
      shape: {
        type: "string"
      },
      locationName: "tenancy"
    }
  }
};
