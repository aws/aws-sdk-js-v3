import { _TargetList } from "./_TargetList";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateResolverRuleInput: _Structure_ = {
  type: "structure",
  required: ["CreatorRequestId", "RuleType", "DomainName"],
  members: {
    CreatorRequestId: {
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
    RuleType: {
      shape: {
        type: "string"
      }
    },
    DomainName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    TargetIps: {
      shape: _TargetList
    },
    ResolverEndpointId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Tags: {
      shape: _TagList
    }
  }
};
