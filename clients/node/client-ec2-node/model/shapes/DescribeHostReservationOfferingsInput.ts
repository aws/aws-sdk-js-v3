import { _FilterList } from "./_FilterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeHostReservationOfferingsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Filter: {
      shape: _FilterList
    },
    MaxDuration: {
      shape: {
        type: "integer"
      }
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 5
      }
    },
    MinDuration: {
      shape: {
        type: "integer"
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    OfferingId: {
      shape: {
        type: "string"
      }
    }
  }
};
