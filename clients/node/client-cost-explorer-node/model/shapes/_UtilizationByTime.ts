import { _DateInterval } from "./_DateInterval";
import { _ReservationUtilizationGroups } from "./_ReservationUtilizationGroups";
import { _ReservationAggregates } from "./_ReservationAggregates";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _UtilizationByTime: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TimePeriod: {
      shape: _DateInterval
    },
    Groups: {
      shape: _ReservationUtilizationGroups
    },
    Total: {
      shape: _ReservationAggregates
    }
  }
};
