import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListTrafficPolicyVersionsInput: _Structure_ = {
  type: "structure",
  required: ["Id"],
  members: {
    Id: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "Id"
    },
    TrafficPolicyVersionMarker: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "trafficpolicyversion"
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
