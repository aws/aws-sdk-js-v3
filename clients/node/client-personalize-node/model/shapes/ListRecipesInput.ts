import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListRecipesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    recipeProvider: {
      shape: {
        type: "string"
      }
    },
    nextToken: {
      shape: {
        type: "string"
      }
    },
    maxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
