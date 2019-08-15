import { _DateInterval } from "./_DateInterval";
import { _ReservationCoverageGroups } from "./_ReservationCoverageGroups";
import { _Coverage } from "./_Coverage";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CoverageByTime: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TimePeriod: {
      shape: _DateInterval
    },
    Groups: {
      shape: _ReservationCoverageGroups
    },
    Total: {
      shape: _Coverage
    }
  }
};
