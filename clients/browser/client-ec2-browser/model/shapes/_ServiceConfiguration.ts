import { _ServiceTypeDetailSet } from "./_ServiceTypeDetailSet";
import { _ValueStringList } from "./_ValueStringList";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ServiceConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ServiceType: {
      shape: _ServiceTypeDetailSet,
      locationName: "serviceType"
    },
    ServiceId: {
      shape: {
        type: "string"
      },
      locationName: "serviceId"
    },
    ServiceName: {
      shape: {
        type: "string"
      },
      locationName: "serviceName"
    },
    ServiceState: {
      shape: {
        type: "string"
      },
      locationName: "serviceState"
    },
    AvailabilityZones: {
      shape: _ValueStringList,
      locationName: "availabilityZoneSet"
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
    NetworkLoadBalancerArns: {
      shape: _ValueStringList,
      locationName: "networkLoadBalancerArnSet"
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
    Tags: {
      shape: _TagList,
      locationName: "tagSet"
    }
  }
};
