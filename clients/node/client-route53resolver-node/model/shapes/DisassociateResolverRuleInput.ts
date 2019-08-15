import { Structure as _Structure_ } from "@aws-sdk/types";

export const DisassociateResolverRuleInput: _Structure_ = {
  type: "structure",
  required: ["VPCId", "ResolverRuleId"],
  members: {
    VPCId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ResolverRuleId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
