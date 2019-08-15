import { _AvailabilityZoneList } from "./_AvailabilityZoneList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAvailabilityZonesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AvailabilityZones: {
      shape: _AvailabilityZoneList,
      locationName: "availabilityZoneInfo"
    }
  }
};
