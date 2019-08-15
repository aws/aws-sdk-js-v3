import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Route: _Structure_ = {
  type: "structure",
  required: [],
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
    DestinationPrefixListId: {
      shape: {
        type: "string"
      },
      locationName: "destinationPrefixListId"
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
    InstanceOwnerId: {
      shape: {
        type: "string"
      },
      locationName: "instanceOwnerId"
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
      },
      locationName: "transitGatewayId"
    },
    NetworkInterfaceId: {
      shape: {
        type: "string"
      },
      locationName: "networkInterfaceId"
    },
    Origin: {
      shape: {
        type: "string"
      },
      locationName: "origin"
    },
    State: {
      shape: {
        type: "string"
      },
      locationName: "state"
    },
    VpcPeeringConnectionId: {
      shape: {
        type: "string"
      },
      locationName: "vpcPeeringConnectionId"
    }
  }
};
