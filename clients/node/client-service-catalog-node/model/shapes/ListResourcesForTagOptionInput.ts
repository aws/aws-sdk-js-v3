import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListResourcesForTagOptionInput: _Structure_ = {
  type: "structure",
  required: ["TagOptionId"],
  members: {
    TagOptionId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ResourceType: {
      shape: {
        type: "string"
      }
    },
    PageSize: {
      shape: {
        type: "integer"
      }
    },
    PageToken: {
      shape: {
        type: "string"
      }
    }
  }
};
