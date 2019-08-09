import { _TrafficMirrorPortRangeRequest } from "./_TrafficMirrorPortRangeRequest";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateTrafficMirrorFilterRuleInput: _Structure_ = {
  type: "structure",
  required: [
    "TrafficMirrorFilterId",
    "TrafficDirection",
    "RuleNumber",
    "RuleAction",
    "DestinationCidrBlock",
    "SourceCidrBlock"
  ],
  members: {
    TrafficMirrorFilterId: {
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
    DryRun: {
      shape: {
        type: "boolean"
      }
    },
    ClientToken: {
      shape: {
        type: "string"
      }
    }
  }
};
