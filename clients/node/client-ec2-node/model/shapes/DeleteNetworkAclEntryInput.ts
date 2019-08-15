import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteNetworkAclEntryInput: _Structure_ = {
  type: "structure",
  required: ["Egress", "NetworkAclId", "RuleNumber"],
  members: {
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
    NetworkAclId: {
      shape: {
        type: "string"
      },
      locationName: "networkAclId"
    },
    RuleNumber: {
      shape: {
        type: "integer"
      },
      locationName: "ruleNumber"
    }
  }
};
