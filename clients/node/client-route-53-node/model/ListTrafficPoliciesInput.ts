import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListTrafficPoliciesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TrafficPolicyIdMarker: {
      shape: {
        type: "string",
        min: 1
      },
      location: "querystring",
      locationName: "trafficpolicyid"
    },
    MaxItems: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "maxitems"
    }
  }
};
