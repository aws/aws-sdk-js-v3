import { _VpcIpv6CidrBlockAssociationSet } from "./_VpcIpv6CidrBlockAssociationSet";
import { _VpcCidrBlockAssociationSet } from "./_VpcCidrBlockAssociationSet";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Vpc: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CidrBlock: {
      shape: {
        type: "string"
      },
      locationName: "cidrBlock"
    },
    DhcpOptionsId: {
      shape: {
        type: "string"
      },
      locationName: "dhcpOptionsId"
    },
    State: {
      shape: {
        type: "string"
      },
      locationName: "state"
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
    InstanceTenancy: {
      shape: {
        type: "string"
      },
      locationName: "instanceTenancy"
    },
    Ipv6CidrBlockAssociationSet: {
      shape: _VpcIpv6CidrBlockAssociationSet,
      locationName: "ipv6CidrBlockAssociationSet"
    },
    CidrBlockAssociationSet: {
      shape: _VpcCidrBlockAssociationSet,
      locationName: "cidrBlockAssociationSet"
    },
    IsDefault: {
      shape: {
        type: "boolean"
      },
      locationName: "isDefault"
    },
    Tags: {
      shape: _TagList,
      locationName: "tagSet"
    }
  }
};
