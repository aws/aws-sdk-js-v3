import { _SubnetIpv6CidrBlockAssociationSet } from "./_SubnetIpv6CidrBlockAssociationSet";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Subnet: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AvailabilityZone: {
      shape: {
        type: "string"
      },
      locationName: "availabilityZone"
    },
    AvailabilityZoneId: {
      shape: {
        type: "string"
      },
      locationName: "availabilityZoneId"
    },
    AvailableIpAddressCount: {
      shape: {
        type: "integer"
      },
      locationName: "availableIpAddressCount"
    },
    CidrBlock: {
      shape: {
        type: "string"
      },
      locationName: "cidrBlock"
    },
    DefaultForAz: {
      shape: {
        type: "boolean"
      },
      locationName: "defaultForAz"
    },
    MapPublicIpOnLaunch: {
      shape: {
        type: "boolean"
      },
      locationName: "mapPublicIpOnLaunch"
    },
    State: {
      shape: {
        type: "string"
      },
      locationName: "state"
    },
    SubnetId: {
      shape: {
        type: "string"
      },
      locationName: "subnetId"
    },
    VpcId: {
      shape: {
        type: "string"
      },
      locationName: "vpcId"
    },
    OwnerId: {
      shape: {
        type: "string"
      },
      locationName: "ownerId"
    },
    AssignIpv6AddressOnCreation: {
      shape: {
        type: "boolean"
      },
      locationName: "assignIpv6AddressOnCreation"
    },
    Ipv6CidrBlockAssociationSet: {
      shape: _SubnetIpv6CidrBlockAssociationSet,
      locationName: "ipv6CidrBlockAssociationSet"
    },
    Tags: {
      shape: _TagList,
      locationName: "tagSet"
    },
    SubnetArn: {
      shape: {
        type: "string"
      },
      locationName: "subnetArn"
    }
  }
};
