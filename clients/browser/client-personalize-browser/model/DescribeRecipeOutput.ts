import { _Recipe } from "./_Recipe";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeRecipeOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    recipe: {
      shape: _Recipe
    }
  }
};
