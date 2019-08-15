import { _TypedAttributeValue } from "./_TypedAttributeValue";
import { _RuleMap } from "./_RuleMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FacetAttributeDefinition: _Structure_ = {
  type: "structure",
  required: ["Type"],
  members: {
    Type: {
      shape: {
        type: "string"
      }
    },
    DefaultValue: {
      shape: _TypedAttributeValue
    },
    IsImmutable: {
      shape: {
        type: "boolean"
      }
    },
    Rules: {
      shape: _RuleMap
    }
  }
};
