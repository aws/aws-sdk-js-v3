import { _Recipes } from "./_Recipes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListRecipesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    recipes: {
      shape: _Recipes
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
