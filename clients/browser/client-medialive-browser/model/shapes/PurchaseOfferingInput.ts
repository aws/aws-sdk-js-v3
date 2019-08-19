import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PurchaseOfferingInput: _Structure_ = {
  type: "structure",
  required: ["OfferingId", "Count"],
  members: {
    Count: {
      shape: {
        type: "integer",
        min: 1
      },
      locationName: "count"
    },
    Name: {
      shape: {
        type: "string"
      },
      locationName: "name"
    },
    OfferingId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "offeringId"
    },
    RequestId: {
      shape: {
        type: "string"
      },
      locationName: "requestId"
    },
    Start: {
      shape: {
        type: "string"
      },
      locationName: "start"
    },
    Tags: {
      shape: _Tags,
      locationName: "tags"
    }
  }
};
