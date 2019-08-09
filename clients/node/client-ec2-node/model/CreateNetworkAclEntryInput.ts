import { _IcmpTypeCode } from "./_IcmpTypeCode";
import { _PortRange } from "./_PortRange";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateNetworkAclEntryInput: _Structure_ = {
  type: "structure",
  required: ["Egress", "NetworkAclId", "Protocol", "RuleAction", "RuleNumber"],
  members: {
    CidrBlock: {
      shape: {
        type: "string"
      },
      locationName: "cidrBlock"
    },
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    },
    Egress: {
      shape: {
        type: "boolean"
      },
      locationName: "egress"
    },
    IcmpTypeCode: {
      shape: _IcmpTypeCode,
      locationName: "Icmp"
    },
    Ipv6CidrBlock: {
      shape: {
        type: "string"
      },
      locationName: "ipv6CidrBlock"
    },
    NetworkAclId: {
      shape: {
        type: "string"
      },
      locationName: "networkAclId"
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
