import { _VpnConnectionOptions } from "./_VpnConnectionOptions";
import { _VpnStaticRouteList } from "./_VpnStaticRouteList";
import { _TagList } from "./_TagList";
import { _VgwTelemetryList } from "./_VgwTelemetryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VpnConnection: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CustomerGatewayConfiguration: {
      shape: {
        type: "string"
      },
      locationName: "customerGatewayConfiguration"
    },
    CustomerGatewayId: {
      shape: {
        type: "string"
      },
      locationName: "customerGatewayId"
    },
    Category: {
      shape: {
        type: "string"
      },
      locationName: "category"
    },
    State: {
      shape: {
        type: "string"
      },
      locationName: "state"
    },
    Type: {
      shape: {
        type: "string"
      },
      locationName: "type"
    },
    VpnConnectionId: {
      shape: {
        type: "string"
      },
      locationName: "vpnConnectionId"
    },
    VpnGatewayId: {
      shape: {
        type: "string"
      },
      locationName: "vpnGatewayId"
    },
    TransitGatewayId: {
      shape: {
        type: "string"
      },
      locationName: "transitGatewayId"
    },
    Options: {
      shape: _VpnConnectionOptions,
      locationName: "options"
    },
    Routes: {
      shape: _VpnStaticRouteList,
      locationName: "routes"
    },
    Tags: {
      shape: _TagList,
      locationName: "tagSet"
    },
    VgwTelemetry: {
      shape: _VgwTelemetryList,
      locationName: "vgwTelemetry"
    }
  }
};
