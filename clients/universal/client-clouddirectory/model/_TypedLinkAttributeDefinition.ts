import { _TypedAttributeValue } from "./_TypedAttributeValue";
import { _RuleMap } from "./_RuleMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TypedLinkAttributeDefinition: _Structure_ = {
  type: "structure",
  required: ["Name", "Type", "RequiredBehavior"],
  members: {
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
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
    },
    RequiredBehavior: {
      shape: {
        type: "string"
      }
    }
  }
};
