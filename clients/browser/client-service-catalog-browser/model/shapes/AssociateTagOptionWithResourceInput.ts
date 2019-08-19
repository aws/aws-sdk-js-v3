import { Structure as _Structure_ } from "@aws-sdk/types";

export const AssociateTagOptionWithResourceInput: _Structure_ = {
  type: "structure",
  required: ["ResourceId", "TagOptionId"],
  members: {
    ResourceId: {
      shape: {
        type: "string"
      }
    },
    TagOptionId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
