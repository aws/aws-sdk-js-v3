import { _AttributeNameMapping } from "./_AttributeNameMapping";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AddAttributesActivity: _Structure_ = {
  type: "structure",
  required: ["name", "attributes"],
  members: {
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    attributes: {
      shape: _AttributeNameMapping
    },
    next: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
