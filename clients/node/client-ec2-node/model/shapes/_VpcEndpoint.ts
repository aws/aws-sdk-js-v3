import { _ValueStringList } from "./_ValueStringList";
import { _GroupIdentifierSet } from "./_GroupIdentifierSet";
import { _DnsEntrySet } from "./_DnsEntrySet";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VpcEndpoint: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    VpcEndpointId: {
      shape: {
        type: "string"
      },
      locationName: "vpcEndpointId"
    },
    VpcEndpointType: {
      shape: {
        type: "string"
      },
      locationName: "vpcEndpointType"
    },
    VpcId: {
      shape: {
        type: "string"
      },
      locationName: "vpcId"
    },
    ServiceName: {
      shape: {
        type: "string"
      },
      locationName: "serviceName"
    },
    State: {
      shape: {
        type: "string"
      },
      locationName: "state"
    },
    PolicyDocument: {
      shape: {
        type: "string"
      },
      locationName: "policyDocument"
    },
    RouteTableIds: {
      shape: _ValueStringList,
      locationName: "routeTableIdSet"
    },
    SubnetIds: {
      shape: _ValueStringList,
      locationName: "subnetIdSet"
    },
    Groups: {
      shape: _GroupIdentifierSet,
      locationName: "groupSet"
    },
    PrivateDnsEnabled: {
      shape: {
        type: "boolean"
      },
      locationName: "privateDnsEnabled"
    },
    RequesterManaged: {
      shape: {
        type: "boolean"
      },
      locationName: "requesterManaged"
    },
    NetworkInterfaceIds: {
      shape: _ValueStringList,
      locationName: "networkInterfaceIdSet"
    },
    DnsEntries: {
      shape: _DnsEntrySet,
      locationName: "dnsEntrySet"
    },
    CreationTimestamp: {
      shape: {
        type: "timestamp"
      },
      locationName: "creationTimestamp"
    },
    Tags: {
      shape: _TagList,
      locationName: "tagSet"
    },
    OwnerId: {
      shape: {
        type: "string"
      },
      locationName: "ownerId"
    }
  }
};
