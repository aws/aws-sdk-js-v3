import { _ReservationResourceSpecification } from "./_ReservationResourceSpecification";
import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeReservationOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Arn: {
      shape: {
        type: "string"
      },
      locationName: "arn"
    },
    Count: {
      shape: {
        type: "integer"
      },
      locationName: "count"
    },
    CurrencyCode: {
      shape: {
        type: "string"
      },
      locationName: "currencyCode"
    },
    Duration: {
      shape: {
        type: "integer"
      },
      locationName: "duration"
    },
    DurationUnits: {
      shape: {
        type: "string"
      },
      locationName: "durationUnits"
    },
    End: {
      shape: {
        type: "string"
      },
      locationName: "end"
    },
    FixedPrice: {
      shape: {
        type: "float"
      },
      locationName: "fixedPrice"
    },
    Name: {
      shape: {
        type: "string"
      },
      locationName: "name"
    },
    OfferingDescription: {
      shape: {
        type: "string"
      },
      locationName: "offeringDescription"
    },
    OfferingId: {
      shape: {
        type: "string"
      },
      locationName: "offeringId"
    },
    OfferingType: {
      shape: {
        type: "string"
      },
      locationName: "offeringType"
    },
    Region: {
      shape: {
        type: "string"
      },
      locationName: "region"
    },
    ReservationId: {
      shape: {
        type: "string"
      },
      locationName: "reservationId"
    },
    ResourceSpecification: {
      shape: _ReservationResourceSpecification,
      locationName: "resourceSpecification"
    },
    Start: {
      shape: {
        type: "string"
      },
      locationName: "start"
    },
    State: {
      shape: {
        type: "string"
      },
      locationName: "state"
    },
    Tags: {
      shape: _Tags,
      locationName: "tags"
    },
    UsagePrice: {
      shape: {
        type: "float"
      },
      locationName: "usagePrice"
    }
  }
};
