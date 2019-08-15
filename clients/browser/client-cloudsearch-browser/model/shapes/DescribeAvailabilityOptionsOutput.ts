import { _AvailabilityOptionsStatus } from "./_AvailabilityOptionsStatus";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAvailabilityOptionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AvailabilityOptions: {
      shape: _AvailabilityOptionsStatus
    }
  }
};
