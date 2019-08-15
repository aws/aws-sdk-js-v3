import { _NumberAttributeConstraintsType } from "./_NumberAttributeConstraintsType";
import { _StringAttributeConstraintsType } from "./_StringAttributeConstraintsType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SchemaAttributeType: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    AttributeDataType: {
      shape: {
        type: "string"
      }
    },
    DeveloperOnlyAttribute: {
      shape: {
        type: "boolean"
      }
    },
    Mutable: {
      shape: {
        type: "boolean"
      }
    },
    Required: {
      shape: {
        type: "boolean"
      }
    },
    NumberAttributeConstraints: {
      shape: _NumberAttributeConstraintsType
    },
    StringAttributeConstraints: {
      shape: _StringAttributeConstraintsType
    }
  }
};
