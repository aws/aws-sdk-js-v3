import { _ReservationPlan } from "./_ReservationPlan";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Queue: _Structure_ = {
  type: "structure",
  required: ["Name"],
  members: {
    Arn: {
      shape: {
        type: "string"
      },
      locationName: "arn"
    },
    CreatedAt: {
      shape: {
        type: "timestamp",
        timestampFormat: "unixTimestamp"
      },
      locationName: "createdAt"
    },
    Description: {
      shape: {
        type: "string"
      },
      locationName: "description"
    },
    LastUpdated: {
      shape: {
        type: "timestamp",
        timestampFormat: "unixTimestamp"
      },
      locationName: "lastUpdated"
    },
    Name: {
      shape: {
        type: "string"
      },
      locationName: "name"
    },
    PricingPlan: {
      shape: {
        type: "string"
      },
      locationName: "pricingPlan"
    },
    ProgressingJobsCount: {
      shape: {
        type: "integer"
      },
      locationName: "progressingJobsCount"
    },
    ReservationPlan: {
      shape: _ReservationPlan,
      locationName: "reservationPlan"
    },
    Status: {
      shape: {
        type: "string"
      },
      locationName: "status"
    },
    SubmittedJobsCount: {
      shape: {
        type: "integer"
      },
      locationName: "submittedJobsCount"
    },
    Type: {
      shape: {
        type: "string"
      },
      locationName: "type"
    }
  }
};
