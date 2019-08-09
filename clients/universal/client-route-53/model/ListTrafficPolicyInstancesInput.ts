import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListTrafficPolicyInstancesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    HostedZoneIdMarker: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "hostedzoneid"
    },
    TrafficPolicyInstanceNameMarker: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "trafficpolicyinstancename"
    },
    TrafficPolicyInstanceTypeMarker: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "trafficpolicyinstancetype"
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
