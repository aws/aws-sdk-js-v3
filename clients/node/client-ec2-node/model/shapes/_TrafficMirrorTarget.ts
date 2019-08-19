import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TrafficMirrorTarget: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TrafficMirrorTargetId: {
      shape: {
        type: "string"
      },
      locationName: "trafficMirrorTargetId"
    },
    NetworkInterfaceId: {
      shape: {
        type: "string"
      },
      locationName: "networkInterfaceId"
    },
    NetworkLoadBalancerArn: {
      shape: {
        type: "string"
      },
      locationName: "networkLoadBalancerArn"
    },
    Type: {
      shape: {
        type: "string"
      },
      locationName: "type"
    },
    Description: {
      shape: {
        type: "string"
      },
      locationName: "description"
    },
    OwnerId: {
      shape: {
        type: "string"
      },
      locationName: "ownerId"
    },
    Tags: {
      shape: _TagList,
      locationName: "tagSet"
    }
  }
};
