import { _UtilizationsByTime } from "./_UtilizationsByTime";
import { _ReservationAggregates } from "./_ReservationAggregates";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetReservationUtilizationOutput: _Structure_ = {
  type: "structure",
  required: ["UtilizationsByTime"],
  members: {
    UtilizationsByTime: {
      shape: _UtilizationsByTime
    },
    Total: {
      shape: _ReservationAggregates
    },
    NextPageToken: {
      shape: {
        type: "string"
      }
    }
  }
};
