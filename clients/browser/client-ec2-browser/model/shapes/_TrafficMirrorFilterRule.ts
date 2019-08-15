import { _TrafficMirrorPortRange } from "./_TrafficMirrorPortRange";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TrafficMirrorFilterRule: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TrafficMirrorFilterRuleId: {
      shape: {
        type: "string"
      },
      locationName: "trafficMirrorFilterRuleId"
    },
    TrafficMirrorFilterId: {
      shape: {
        type: "string"
      },
      locationName: "trafficMirrorFilterId"
    },
    TrafficDirection: {
      shape: {
        type: "string"
      },
      locationName: "trafficDirection"
    },
    RuleNumber: {
      shape: {
        type: "integer"
      },
      locationName: "ruleNumber"
    },
    RuleAction: {
      shape: {
        type: "string"
      },
      locationName: "ruleAction"
    },
    Protocol: {
      shape: {
        type: "integer"
      },
      locationName: "protocol"
    },
    DestinationPortRange: {
      shape: _TrafficMirrorPortRange,
      locationName: "destinationPortRange"
    },
    SourcePortRange: {
      shape: _TrafficMirrorPortRange,
      locationName: "sourcePortRange"
    },
    DestinationCidrBlock: {
      shape: {
        type: "string"
      },
      locationName: "destinationCidrBlock"
    },
    SourceCidrBlock: {
      shape: {
        type: "string"
      },
      locationName: "sourceCidrBlock"
    },
    Description: {
      shape: {
        type: "string"
      },
      locationName: "description"
    }
  }
};
