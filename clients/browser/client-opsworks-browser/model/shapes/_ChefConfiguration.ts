import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ChefConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ManageBerkshelf: {
      shape: {
        type: "boolean"
      }
    },
    BerkshelfVersion: {
      shape: {
        type: "string"
      }
    }
  }
};
