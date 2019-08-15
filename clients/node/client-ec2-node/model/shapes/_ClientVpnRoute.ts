import { _ClientVpnRouteStatus } from "./_ClientVpnRouteStatus";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ClientVpnRoute: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ClientVpnEndpointId: {
      shape: {
        type: "string"
      },
      locationName: "clientVpnEndpointId"
    },
    DestinationCidr: {
      shape: {
        type: "string"
      },
      locationName: "destinationCidr"
    },
    TargetSubnet: {
      shape: {
        type: "string"
      },
      locationName: "targetSubnet"
    },
    Type: {
      shape: {
        type: "string"
      },
      locationName: "type"
    },
    Origin: {
      shape: {
        type: "string"
      },
      locationName: "origin"
    },
    Status: {
      shape: _ClientVpnRouteStatus,
      locationName: "status"
    },
    Description: {
      shape: {
        type: "string"
      },
      locationName: "description"
    }
  }
};
