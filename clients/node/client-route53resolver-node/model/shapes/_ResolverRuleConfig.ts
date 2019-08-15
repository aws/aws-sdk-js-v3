import { _TargetList } from "./_TargetList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ResolverRuleConfig: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Name: {
      shape: {
        type: "string"
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
    }
  }
};
