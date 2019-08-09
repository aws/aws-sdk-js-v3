import { _ReservationResourceSpecification } from "./_ReservationResourceSpecification";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeOfferingOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Arn: {
      shape: {
        type: "string"
      },
      locationName: "arn"
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
    FixedPrice: {
      shape: {
        type: "float"
      },
      locationName: "fixedPrice"
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
    ResourceSpecification: {
      shape: _ReservationResourceSpecification,
      locationName: "resourceSpecification"
    },
    UsagePrice: {
      shape: {
        type: "float"
      },
      locationName: "usagePrice"
    }
  }
};
