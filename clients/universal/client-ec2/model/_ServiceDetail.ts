import { _ServiceTypeDetailSet } from "./_ServiceTypeDetailSet";
import { _ValueStringList } from "./_ValueStringList";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ServiceDetail: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ServiceName: {
      shape: {
        type: "string"
      },
      locationName: "serviceName"
    },
    ServiceId: {
      shape: {
        type: "string"
      },
      locationName: "serviceId"
    },
    ServiceType: {
      shape: _ServiceTypeDetailSet,
      locationName: "serviceType"
    },
    AvailabilityZones: {
      shape: _ValueStringList,
      locationName: "availabilityZoneSet"
    },
    Owner: {
      shape: {
        type: "string"
      },
      locationName: "owner"
    },
    BaseEndpointDnsNames: {
      shape: _ValueStringList,
      locationName: "baseEndpointDnsNameSet"
    },
    PrivateDnsName: {
      shape: {
        type: "string"
      },
      locationName: "privateDnsName"
    },
    VpcEndpointPolicySupported: {
      shape: {
        type: "boolean"
      },
      locationName: "vpcEndpointPolicySupported"
    },
    AcceptanceRequired: {
      shape: {
        type: "boolean"
      },
      locationName: "acceptanceRequired"
    },
    ManagesVpcEndpoints: {
      shape: {
        type: "boolean"
      },
      locationName: "managesVpcEndpoints"
    },
    Tags: {
      shape: _TagList,
      locationName: "tagSet"
    }
  }
};
