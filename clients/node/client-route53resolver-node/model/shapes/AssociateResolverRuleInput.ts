import { Structure as _Structure_ } from "@aws-sdk/types";

export const AssociateResolverRuleInput: _Structure_ = {
  type: "structure",
  required: ["ResolverRuleId", "VPCId"],
  members: {
    ResolverRuleId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Name: {
      shape: {
        type: "string"
      }
    },
    VPCId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
