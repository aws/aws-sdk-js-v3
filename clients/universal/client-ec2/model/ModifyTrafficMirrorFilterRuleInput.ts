import { _TrafficMirrorPortRangeRequest } from "./_TrafficMirrorPortRangeRequest";
import { _TrafficMirrorFilterRuleFieldList } from "./_TrafficMirrorFilterRuleFieldList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyTrafficMirrorFilterRuleInput: _Structure_ = {
  type: "structure",
  required: ["TrafficMirrorFilterRuleId"],
  members: {
    TrafficMirrorFilterRuleId: {
      shape: {
        type: "string"
      }
    },
    TrafficDirection: {
      shape: {
        type: "string"
      }
    },
    RuleNumber: {
      shape: {
        type: "integer"
      }
    },
    RuleAction: {
      shape: {
        type: "string"
      }
    },
    DestinationPortRange: {
      shape: _TrafficMirrorPortRangeRequest
    },
    SourcePortRange: {
      shape: _TrafficMirrorPortRangeRequest
    },
    Protocol: {
      shape: {
        type: "integer"
      }
    },
    DestinationCidrBlock: {
      shape: {
        type: "string"
      }
    },
    SourceCidrBlock: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    RemoveFields: {
      shape: _TrafficMirrorFilterRuleFieldList,
      locationName: "RemoveField"
    },
    DryRun: {
      shape: {
        type: "boolean"
      }
    }
  }
};
