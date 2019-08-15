import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateRouteInput: _Structure_ = {
  type: "structure",
  required: ["RouteTableId"],
  members: {
    DestinationCidrBlock: {
      shape: {
        type: "string"
      },
      locationName: "destinationCidrBlock"
    },
    DestinationIpv6CidrBlock: {
      shape: {
        type: "string"
      },
      locationName: "destinationIpv6CidrBlock"
    },
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    },
    EgressOnlyInternetGatewayId: {
      shape: {
        type: "string"
      },
      locationName: "egressOnlyInternetGatewayId"
    },
    GatewayId: {
      shape: {
        type: "string"
      },
      locationName: "gatewayId"
    },
    InstanceId: {
      shape: {
        type: "string"
      },
      locationName: "instanceId"
    },
    NatGatewayId: {
      shape: {
        type: "string"
      },
      locationName: "natGatewayId"
    },
    TransitGatewayId: {
      shape: {
        type: "string"
      }
    },
    NetworkInterfaceId: {
      shape: {
        type: "string"
      },
      locationName: "networkInterfaceId"
    },
    RouteTableId: {
      shape: {
        type: "string"
      },
      locationName: "routeTableId"
    },
    VpcPeeringConnectionId: {
      shape: {
        type: "string"
      },
      locationName: "vpcPeeringConnectionId"
    }
  }
};
