import { _Tag } from "./_Tag";
import { _ReplicationRuleAndOperator } from "./_ReplicationRuleAndOperator";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ReplicationRuleFilter: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Prefix: {
      shape: {
        type: "string"
      }
    },
    Tag: {
      shape: _Tag
    },
    And: {
      shape: _ReplicationRuleAndOperator
    }
  }
};
