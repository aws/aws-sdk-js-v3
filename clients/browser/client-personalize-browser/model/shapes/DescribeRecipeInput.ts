import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeRecipeInput: _Structure_ = {
  type: "structure",
  required: ["recipeArn"],
  members: {
    recipeArn: {
      shape: {
        type: "string"
      }
    }
  }
};
