import { _IcmpTypeCode } from "./_IcmpTypeCode";
import { _PortRange } from "./_PortRange";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _NetworkAclEntry: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CidrBlock: {
      shape: {
        type: "string"
      },
      locationName: "cidrBlock"
    },
    Egress: {
      shape: {
        type: "boolean"
      },
      locationName: "egress"
    },
    IcmpTypeCode: {
      shape: _IcmpTypeCode,
      locationName: "icmpTypeCode"
    },
    Ipv6CidrBlock: {
      shape: {
        type: "string"
      },
      locationName: "ipv6CidrBlock"
    },
    PortRange: {
      shape: _PortRange,
      locationName: "portRange"
    },
    Protocol: {
      shape: {
        type: "string"
      },
      locationName: "protocol"
    },
    RuleAction: {
      shape: {
        type: "string"
      },
      locationName: "ruleAction"
    },
    RuleNumber: {
      shape: {
        type: "integer"
      },
      locationName: "ruleNumber"
    }
  }
};
