import { _FilterList } from "./_FilterList";
import { _HostReservationIdSet } from "./_HostReservationIdSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeHostReservationsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Filter: {
      shape: _FilterList
    },
    HostReservationIdSet: {
      shape: _HostReservationIdSet
    },
    MaxResults: {
      shape: {
        type: "integer"
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
