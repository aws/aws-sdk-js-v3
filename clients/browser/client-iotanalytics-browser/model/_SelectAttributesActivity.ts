import { _AttributeNames } from "./_AttributeNames";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SelectAttributesActivity: _Structure_ = {
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
      shape: _AttributeNames
    },
    next: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
