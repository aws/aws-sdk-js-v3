import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListThingsInBillingGroupInput: _Structure_ = {
  type: "structure",
  required: ["billingGroupName"],
  members: {
    billingGroupName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "billingGroupName"
    },
    nextToken: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "nextToken"
    },
    maxResults: {
      shape: {
        type: "integer",
        min: 1
      },
      location: "querystring",
      locationName: "maxResults"
    }
  }
};
