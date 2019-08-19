import { _Attributes } from "./_Attributes";
import { _ReservationAggregates } from "./_ReservationAggregates";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ReservationUtilizationGroup: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Key: {
      shape: {
        type: "string"
      }
    },
    Value: {
      shape: {
        type: "string"
      }
    },
    Attributes: {
      shape: _Attributes
    },
    Utilization: {
      shape: _ReservationAggregates
    }
  }
};
