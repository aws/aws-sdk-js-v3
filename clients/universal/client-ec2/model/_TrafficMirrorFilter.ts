import { _TrafficMirrorFilterRuleList } from "./_TrafficMirrorFilterRuleList";
import { _TrafficMirrorNetworkServiceList } from "./_TrafficMirrorNetworkServiceList";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TrafficMirrorFilter: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TrafficMirrorFilterId: {
      shape: {
        type: "string"
      },
      locationName: "trafficMirrorFilterId"
    },
    IngressFilterRules: {
      shape: _TrafficMirrorFilterRuleList,
      locationName: "ingressFilterRuleSet"
    },
    EgressFilterRules: {
      shape: _TrafficMirrorFilterRuleList,
      locationName: "egressFilterRuleSet"
    },
    NetworkServices: {
      shape: _TrafficMirrorNetworkServiceList,
      locationName: "networkServiceSet"
    },
    Description: {
      shape: {
        type: "string"
      },
      locationName: "description"
    },
    Tags: {
      shape: _TagList,
      locationName: "tagSet"
    }
  }
};
