import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListDomainDeliverabilityCampaignsInput: _Structure_ = {
  type: "structure",
  required: ["StartDate", "EndDate", "SubscribedDomain"],
  members: {
    StartDate: {
      shape: {
        type: "timestamp"
      },
      location: "querystring",
      locationName: "StartDate"
    },
    EndDate: {
      shape: {
        type: "timestamp"
      },
      location: "querystring",
      locationName: "EndDate"
    },
    SubscribedDomain: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "SubscribedDomain"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "NextToken"
    },
    PageSize: {
      shape: {
        type: "integer"
      },
      location: "querystring",
      locationName: "PageSize"
    }
  }
};
